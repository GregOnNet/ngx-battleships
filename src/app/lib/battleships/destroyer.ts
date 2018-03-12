import { Warhsip } from './warship';

export class Destroyer extends Warhsip {
  constructor(coordinates) {
    super(coordinates, 2);
  }
}
