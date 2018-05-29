import { WarShip } from './warship';

export class Cruiser extends WarShip {
  constructor(coordinates: [number, number][]) {
    super(coordinates, 3);
  }
}
