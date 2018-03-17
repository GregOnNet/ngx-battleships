import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Coordinate, Warhsip, WarshipSkeleton } from '../../../lib/battleships';

@Component({
  selector: 'bs-craft-warship',
  templateUrl: './craft-warship.component.html',
  styleUrls: ['./craft-warship.component.scss']
})
export class CraftWarshipComponent implements OnInit {
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

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.warshipForm = this._fb.group({
      coordinates: this._fb.array([])
    });
  }

  setupCoordinatesForm(shipSkeleton: WarshipSkeleton) {
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
