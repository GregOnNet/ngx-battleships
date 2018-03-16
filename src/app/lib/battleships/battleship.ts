import { Warhsip } from './warship';

export class Battleship extends Warhsip {
  constructor(coordinates) {
    super(coordinates, 4);
  }
}
