export class Coordinate {
  constructor(public x: number, public y: number) {}

  isEqual(other: Coordinate) {
    return this.x === other.x && this.y === other.y;
  }
}
