import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { map } from 'rxjs/operators';

import { Coordinate, Warhsip, WarshipSkeleton } from '../../../lib/battleships';
import { BattleFieldPosition, IProvideWarshipPlan } from '../../../lib/battleships/contracts';
import { ChooseWarshipPlan } from '../../actions/harbour.actions';

@Component({
  selector: 'bs-craft-warship',
  templateUrl: './craft-warship.component.html',
  styleUrls: ['./craft-warship.component.scss']
})
export class CraftWarshipComponent implements OnInit {
  warshipPlan$: Observable<IProvideWarshipPlan>;
  battlefieldPosition$: Observable<BattleFieldPosition[]>;

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

  constructor(private _fb: FormBuilder, private _store: Store<any>) {
    this._store.select(s => s).subscribe(s => console.log(s));

    this.warshipForm = this._provideCoordinateForm();
  }

  ngOnInit(): void {}

  updateCoordinatesForm(selectedPlan: IProvideWarshipPlan) {
    const coordinates = this.warshipForm.get('coordinates') as FormArray;
    coordinates.controls = this._provideCoordinateControls(selectedPlan.parts);

    combineLatest(coordinates.controls.map(c => c.valueChanges))
      .pipe(map(() => this._enteredCoodinates))
      .subscribe(
        positions => console.log(positions) /* update coordinates in store */
      );
  }

  changeWharshipPlan(warshipPlan: WarshipSkeleton) {
    this.updateCoordinatesForm(warshipPlan);
    // warhsipPlan => shipSkeleton
    this._store.dispatch(new ChooseWarshipPlan(warshipPlan));
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

  private _fillCoordinateForm(coordinates: BattleFieldPosition[]): void {
    const coordinateForm = this.warshipForm.get('coordinates') as FormArray;

    coordinates.forEach((c, i) =>
      coordinateForm.controls[i].setValue(new Coordinate(c.x, c.y), {
        emitEvent: false
      })
    );
  }
}
