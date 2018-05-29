import { WarShip } from './warship';

export class Battleship extends WarShip {
  constructor(coordinates: [number, number][]) {
    super(coordinates, 4);
  }
}
