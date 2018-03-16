import { Warhsip } from './warship';

export class Cruiser extends Warhsip {
  constructor(coordinates: [number, number][]) {
    super(coordinates, 3);
  }
}
