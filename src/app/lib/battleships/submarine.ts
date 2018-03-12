import { Warhsip } from './warship';
import { Coordinate } from './coordinate';

export class Submarine extends Warhsip {
  constructor(coordinates: [number, number][]) {
    super(coordinates, 3);
  }
}
