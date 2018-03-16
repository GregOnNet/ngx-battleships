import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Coordinate, WarshipSkeleton } from '../../../lib/battleships';

@Component({
  selector: 'bs-craft-warship',
  templateUrl: './craft-warship.component.html',
  styleUrls: ['./craft-warship.component.scss']
})
export class CraftWarshipComponent implements OnInit {
  selectedWarship: WarshipSkeleton = {} as WarshipSkeleton;
  warshipForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.warshipForm = this._fb.group({
      coordinates: this._fb.array([])
    });
  }

  setupCoordinatesForm(shipSkeleton: WarshipSkeleton) {
    this.selectedWarship = shipSkeleton;
    const coordinates = this.warshipForm.get('coordinates') as FormArray;
    coordinates.controls = [];

    for (let i = 0; i < shipSkeleton.length; i++) {
      coordinates.push(this._fb.control(new Coordinate(0, 0)));
    }
  }

  warship(type: string, length): WarshipSkeleton {
    return {
      type,
      icon: type.toLowerCase(),
      length
    };
  }
}
