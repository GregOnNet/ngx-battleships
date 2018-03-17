import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Coordinate } from '../../../lib/battleships';

@Component({
  selector: 'bs-coordinate-input',
  templateUrl: './coordinate-input.component.html',
  styleUrls: ['./coordinate-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CoordinateInputComponent),
      multi: true
    }
  ]
})
export class CoordinateInputComponent implements ControlValueAccessor {
  coordinate = new Coordinate(0, 0);

  propagateChange: (coordinate: Coordinate) => void;
  propagateTouch: () => void = () => {};

  writeValue(coordinate: Coordinate): void {
    this.propagateTouch();

    if (!coordinate) {
      return;
    }

    this.coordinate = coordinate;
  }

  setCoordinate(x: number, y: number): void {
    if (x <= 0 || y <= 0) {
      return;
    }

    this.coordinate.x = x;
    this.coordinate.y = y;

    this.propagateChange(this.coordinate);
  }

  registerOnChange(fn: (coordinate: Coordinate) => void): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.propagateTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
