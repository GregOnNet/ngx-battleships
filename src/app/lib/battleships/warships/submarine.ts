import { Warhsip } from './warship';

export class Submarine extends Warhsip {
  constructor(coordinates: [number, number][]) {
    super(coordinates, 3);
  }
}
