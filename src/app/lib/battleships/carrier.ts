import { Warhsip } from './warship';

export class Carrier extends Warhsip {
  constructor(coordinates) {
    super(coordinates, 5);
  }
}
