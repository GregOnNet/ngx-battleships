import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Coordinate, Warhsip, WarshipSkeleton } from '../../../lib/battleships';
import { IProvideWarshipPlan } from '../../../lib/battleships/contracts';
import * as fromHarbour from '../../redux';
import * as Action from '../../redux/harbour.actions';

@Component({
  selector: 'bs-craft-warship',
  templateUrl: './craft-warship.component.html',
  styleUrls: ['./craft-warship.component.scss']
})
export class CraftWarshipComponent implements OnInit {
  warshipPlan$: Observable<IProvideWarshipPlan>;

  formError: string;

  selectedWarship: WarshipSkeleton = {} as WarshipSkeleton;
  warshipForm: FormGroup;

  @Output() create = new EventEmitter<Warhsip>();

  private get _enteredCoordinates(): [number, number][] {
    const enteredCoordinates = this.warshipForm.get('coordinates') as FormArray;
    return enteredCoordinates.controls
      .map(control => control.value)
      .map(
        (coordinate: Coordinate) =>
          [coordinate.x, coordinate.y] as [number, number]
      );
  }

  constructor(
    private _store: Store<fromHarbour.Slice>,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.warshipPlan$ = this._store.select(s => s.selectedShipPlan);
    this.warshipForm = this._fb.group({
      coordinates: this._fb.array([])
    });
  }

  setupCoordinatesForm(shipSkeleton: WarshipSkeleton) {
    this._store.dispatch(new Action.SelectWarshipPlan(shipSkeleton));

    this.selectedWarship = shipSkeleton;
    const coordinates = this.warshipForm.get('coordinates') as FormArray;
    coordinates.controls = this._provideCoordinateControls(shipSkeleton.parts);
  }

  craftWarship() {
    try {
      const warship = new this.selectedWarship.type(this._enteredCoordinates);
      this.create.emit(warship);
    } catch (error) {
      this.formError = error.message;
    }
  }

  private _provideCoordinateControls(amunt: number) {
    const coordinateControls = [];

    for (let i = 0; i < amunt; i++) {
      coordinateControls.push(this._fb.control(new Coordinate(0, 0)));
    }

    return coordinateControls;
  }
}
