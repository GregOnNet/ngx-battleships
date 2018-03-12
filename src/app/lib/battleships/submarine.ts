import { Battleship } from './battleship';
import { Coordinate } from './coordinate';

export class Submarine extends Battleship {
  constructor(coordinates: [number, number][]) {
    super(coordinates, 3);
  }
}
