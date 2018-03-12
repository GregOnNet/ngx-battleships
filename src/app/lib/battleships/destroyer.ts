import { Battleship } from './battleship';

export class Destroyer extends Battleship {
  constructor(coordinates) {
    super(coordinates, 2);
  }
}
