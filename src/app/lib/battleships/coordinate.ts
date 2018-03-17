import { BattleFieldPosition } from './contracts';

export class Coordinate implements BattleFieldPosition {
  constructor(public x: number, public y: number) {}

  isEqual(other: Coordinate) {
    return this.x === other.x && this.y === other.y;
  }
}
