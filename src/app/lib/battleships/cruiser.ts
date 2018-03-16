import { Warhsip } from './warship';

export class Cruiser extends Warhsip {
  constructor(coordinates) {
    super(coordinates, 3);
  }
}
