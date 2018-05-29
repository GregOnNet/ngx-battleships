import { WarShip } from './warship';

export class Carrier extends WarShip {
  constructor(coordinates: [number, number][]) {
    super(coordinates, 5);
  }
}
