import { WarShip } from './warship';

export class Submarine extends WarShip {
  constructor(coordinates: [number, number][]) {
    super(coordinates, 3);
  }
}
