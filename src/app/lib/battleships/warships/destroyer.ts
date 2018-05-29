import { WarShip } from './warship';

export class Destroyer extends WarShip {
  constructor(coordinates: [number, number][]) {
    super(coordinates, 2);
  }
}
