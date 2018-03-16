import { Warhsip } from './warship';

export class Carrier extends Warhsip {
  constructor(coordinates: [number, number][]) {
    super(coordinates, 5);
  }
}
