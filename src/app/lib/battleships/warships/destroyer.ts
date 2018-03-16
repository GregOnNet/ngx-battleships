import { Warhsip } from './warship';

export class Destroyer extends Warhsip {
  constructor(coordinates: [number, number][]) {
    super(coordinates, 2);
  }
}
