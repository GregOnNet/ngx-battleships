import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

import { Coordinate, Warhsip, WarshipSkeleton } from '../../../lib/battleships';
import { IProvideWarshipPlan } from '../../../lib/battleships/contracts';
import * as fromHarbour from '../../redux';
import * as Action from '../../redux/harbour.actions';

@Component({
  selector: 'bs-craft-warship',
  templateUrl: './craft-warship.component.html',
  styleUrls: ['./craft-warship.component.scss']
})
export class CraftWarshipComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject<boolean>();

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
    private _store: Store<fromHarbour.State>,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.warshipPlan$ = this._store.select(
      s => s.harbour.harbour.selectedShipPlan
    );
    this.warshipForm = this._provideCoordinateForm();
  }

  ngOnDestroy(): void {
    this._destroyed$.next(true);
  }

  updateCoordinatesForm(selectedPlan: IProvideWarshipPlan) {
    const coordinates = this.warshipForm.get('coordinates') as FormArray;
    coordinates.controls = this._provideCoordinateControls(selectedPlan.parts);
  }

  changeWharshipPlan(shipSkeleton: WarshipSkeleton) {
    this._store.dispatch(new Action.SelectWarshipPlan(shipSkeleton));
  }

  craftWarship() {
    try {
      const warship = new this.selectedWarship.type(this._enteredCoordinates);
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

  private _provideCoordinateControls(amunt: number) {
    const coordinateControls = [];

    for (let i = 0; i < amunt; i++) {
      coordinateControls.push(this._fb.control(new Coordinate(0, 0)));
    }

    return coordinateControls;
  }

  private _selectShipPlan(): Observable<IProvideWarshipPlan> {
    return this._store
      .select(s => s.harbour.harbour.selectedShipPlan)
      .pipe(
        takeUntil(this._destroyed$),
        tap(selectedPlan => this.updateCoordinatesForm(selectedPlan))
      );
  }
}
