import { AlignedCoordinate } from '../aligned-coordinate';
import { Coordinate } from '../coordinate';
import { IDestroyWarShips } from './i-destroy-warships';

export class Warhsip implements IDestroyWarShips {
  name = this.constructor.name;

  coordinates: Coordinate[];
  intactParts: Coordinate[];

  constructor(coordinates: [number, number][], public parts: number) {
    this.coordinates = coordinates.map(c => new Coordinate(c[0], c[1]));
    this.intactParts = [...this.coordinates];

    this._throwIfHasNotRightCountOfCoordinates(parts, this.coordinates);
    this._throwIfInvalidCoordinatesHavePassed(this.coordinates);
    this._throwIfNotInLine(this.coordinates);
    this._throwIfEqual(this.coordinates);
    this._throwIfDiagonal(this.coordinates);
    this._throwIfNoDirectNeighbours(this.coordinates);
  }

  hit(coordinate: [number, number]) {
    const shot = new Coordinate(coordinate[0], coordinate[1]);
    this.intactParts = this.intactParts.filter(p => !p.isEqual(shot));
  }

  private _throwIfHasNotRightCountOfCoordinates(
    allowedCount: number,
    coordinates: Coordinate[]
  ) {
    if (coordinates.length !== allowedCount) {
      throw new Error(
        `${this.name}: The ship must have ${allowedCount} coordinates.`
      );
    }
  }

  private _throwIfInvalidCoordinatesHavePassed(coordinates: Coordinate[]) {
    console.log(coordinates);
    const invalidCoordinate = coordinates.find(
      coordinate => coordinate.x < 1 || coordinate.y < 1
    );

    if (invalidCoordinate) {
      throw new Error(
        `${this.name}: The smallest possible coordinate is [1, 1].` +
        `X: ${invalidCoordinate.x}, Y: ${invalidCoordinate.y} is not valid.`
      );
    }
  }

  private _throwIfNotInLine(coordinates: Coordinate[]) {
    const areXsNotInLine = this._areInLine(coordinates, c => c.x);
    const areYsNotInLine = this._areInLine(coordinates, c => c.y);

    if (areXsNotInLine && areYsNotInLine) {
      throw new Error(
        `${this.name}: The ship is not allowed to go around the corner.`
      );
    }
  }

  private _throwIfEqual(coordinates: Coordinate[]) {
    const unique = new Set(coordinates);

    if (unique.size !== coordinates.length) {
      throw new Error(
        `${this.name}: The ship must have different coordinates.`
      );
    }
  }

  private _throwIfDiagonal(coordinates: Coordinate[]) {
    coordinates.reduce((previous, current) => {
      if (previous.x < current.x && previous.y < current.y) {
        throw new Error(`${this.name}: The ship must no be diagonal.`);
      }
      return current;
    });
  }

  private _throwIfNoDirectNeighbours(coordinates: Coordinate[]) {
    coordinates.reduce((previous, current) => {
      if (
        this._distanceOf(previous.x, current.x) > 1 ||
        this._distanceOf(previous.y, current.y) > 1
      ) {
        throw new Error(`${this.name}: The ship must not have gaps.`);
      }
      return current;
    });
  }

  private _distanceOf(first: number, second: number): number {
    return Math.abs(first - second);
  }

  private _areInLine(
    coordinates: Coordinate[],
    selector: (c: Coordinate) => number
  ): boolean {
    return coordinates.map(selector).reduce<AlignedCoordinate>(
      (prev, curr) => ({
        areNotInLine: prev.areNotInLine || prev.value === curr,
        value: curr
      }),
      { areNotInLine: false, value: 0 }
    ).areNotInLine;
  }
}
