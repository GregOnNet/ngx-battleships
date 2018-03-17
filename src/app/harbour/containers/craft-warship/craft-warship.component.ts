import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';

import { Coordinate, Warhsip, WarshipSkeleton } from '../../../lib/battleships';
import {
  IProvideWarshipPlan,
  BattleFieldPosition
} from '../../../lib/battleships/contracts';
import * as fromHarbour from '../../reducers';
import * as Action from '../../actions';
import { combineLatest } from 'rxjs/observable/combineLatest';

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

  private get _enteredCoodinates(): BattleFieldPosition[] {
    const enteredCoordinates = this.warshipForm.get('coordinates') as FormArray;
    return enteredCoordinates.controls.map(control => control.value);
  }

  private get _enteredCoordinatesRaw(): [number, number][] {
    return this._enteredCoodinates.map(
      (c: Coordinate) => [c.x, c.y] as [number, number]
    );
  }

  constructor(
    private _store: Store<fromHarbour.State>,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.warshipForm = this._provideCoordinateForm();
    this.warshipPlan$ = this._selectShipPlan();
  }

  updateCoordinatesForm(selectedPlan: IProvideWarshipPlan) {
    const coordinates = this.warshipForm.get('coordinates') as FormArray;
    coordinates.controls = this._provideCoordinateControls(selectedPlan.parts);

    combineLatest(coordinates.controls.map(c => c.valueChanges))
      .pipe(map(() => this._enteredCoodinates))
      .subscribe(positions =>
        this._store.dispatch(new Action.DeclareMissionTarget(positions))
      );
  }

  changeWharshipPlan(shipSkeleton: WarshipSkeleton) {
    this._store.dispatch(new Action.ChooseWarshipPlan(shipSkeleton));
  }

  craftWarship() {
    try {
      const warship = new this.selectedWarship.type(
        this._enteredCoordinatesRaw
      );
      this.create.emit(warship);
    } catch (error) {
      this.formError = error.message;
    }
  }

  private _provideCoordinateForm(): FormGroup {
    return this._fb.group({
      coordinates: this._fb.array([])
    });
  }

  private _provideCoordinateControls(amunt: number): FormControl[] {
    const coordinateControls = [];

    for (let i = 0; i < amunt; i++) {
      coordinateControls.push(this._fb.control(new Coordinate(0, 0)));
    }

    return coordinateControls;
  }

  private _selectShipPlan(): Observable<IProvideWarshipPlan> {
    return this._store.pipe(
      select(fromHarbour.warshipPlan),
      tap(selectedPlan => this.updateCoordinatesForm(selectedPlan))
    );
  }
}
