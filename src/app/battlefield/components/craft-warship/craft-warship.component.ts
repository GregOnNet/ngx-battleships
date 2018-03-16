import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Coordinate } from '../../../lib/battleships';

export interface WarshipSkeleton {
  type: string;
  icon: string;
  length: number;
}

@Component({
  selector: 'bs-craft-warship',
  templateUrl: './craft-warship.component.html',
  styleUrls: ['./craft-warship.component.scss']
})
export class CraftWarshipComponent implements OnInit {
  selectedWarship: WarshipSkeleton = {} as WarshipSkeleton;
  warshipForm: FormGroup;
  warships: WarshipSkeleton[];

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.warshipForm = this._fb.group({
      coordinates: this._fb.array([])
    });

    this.warships = [
      this.warship('Destroyer', 2),
      this.warship('Submarine', 3),
      this.warship('Cruiser', 3),
      this.warship('Battleship', 4),
      this.warship('Carrier', 5)
    ];
  }

  updateCurrentWarship(warship: WarshipSkeleton) {
    this.selectedWarship = warship;
    const coordinates = this.warshipForm.get('coordinates') as FormArray;
    coordinates.controls = [];

    for (let i = 0; i < warship.length; i++) {
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
