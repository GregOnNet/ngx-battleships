import { Destroyer } from './warships/destroyer';
import { Warhsip, Coordinate } from '.';

describe('Game is not ready', () => {
  describe('When a game does not have 5 destroyer', () => {
    it('should indicate that the game is not ready', () => {
      const game = new Game();
      const destroyer = new Destroyer([[1, 1], [1, 2]]);
      game.addWarship(destroyer);

      expect(game.isReadyToPlay).toBe(false);
    });
  });

  describe('When two warships have a same coordinate', () => {
    it('should fail', () => {
      const game = new Game();
      const destroyer = new Destroyer([[1, 1], [1, 2]]);

      game.addWarship(destroyer);

      expect(() => game.addWarship(destroyer)).toThrow();
    });
  });
});

describe('Game is ready to play', () => {
  describe('When a game has all needed warships', () => {
    it('should be ready', () => {
      const game = new Game();
      const destroyer_1 = new Destroyer([[1, 1], [1, 2]]);
      const destroyer_2 = new Destroyer([[3, 3], [3, 4]]);

      game.addWarship(destroyer_1);
      game.addWarship(destroyer_2);

      expect(game.isReadyToPlay).toBe(true);
    });
  });
});

export class Game {
  neededShips = {
    destroyer: 2
  };

  isReadyToPlay = false;

  constructor(private _warships: Warhsip[] = []) {}

  addWarship(warship: Destroyer) {
    this._throwIfCoordinatesAreAlreadyTaken(warship.coordinates);

    this._warships = [...this._warships, warship];
    this._updateReadiness();
  }

  private _throwIfCoordinatesAreAlreadyTaken(coordinates: Coordinate[]): void {
    const takenCoordinate = this._warships
      .map(warship => warship.coordinates)
      .reduce((prev, curr) => prev.concat(curr), [])
      .find(coordinate => coordinates.some(c => c === coordinate));

    if (takenCoordinate) {
      throw new Error(
        `Sorry, but the field [${takenCoordinate.x}, ${takenCoordinate.y}]` +
          'is already taken.'
      );
    }
  }

  private _updateReadiness(): void {
    this.isReadyToPlay = Object.keys(this.neededShips).every(shipName =>
      this._amountOfShipIsSatisfied(shipName)
    );
  }

  private _amountOfShipIsSatisfied(shipName: string) {
    return (
      this._warships
        .map(warship => warship.name)
        .filter(name => name.toLowerCase() === shipName.toLowerCase())
        .length === this.neededShips[shipName]
    );
  }
}
