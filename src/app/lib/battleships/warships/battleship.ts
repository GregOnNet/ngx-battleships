import { Warhsip } from './warship';

export class Battleship extends Warhsip {
  constructor(coordinates: [number, number][]) {
    super(coordinates, 4);
  }
}
