import { Destroyer } from './warships/destroyer';
import { Warhsip } from '.';

describe('Game is not ready', () => {
  describe('When a game does not have 5 destroyer', () => {
    it('should indicate that the game is not ready', () => {
      const game = new Game();
      const destroyer = new Destroyer([[1, 1], [1, 2]]);
      game.addDestroyer(destroyer);

      expect(game.isReadyToPlay).toBe(false);
    });
  });
});

describe('Game is ready to play', () => {
  describe('When a game has all needed warships', () => {
    it('should be ready', () => {
      const game = new Game();
      const destroyer_1 = new Destroyer([[1, 1], [1, 2]]);
      const destroyer_2 = new Destroyer([[3, 3], [3, 4]]);

      game.addDestroyer(destroyer_1);
      game.addDestroyer(destroyer_2);

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

  addDestroyer(destroyer: Destroyer) {
    this._warships = [...this._warships, destroyer];
    this._updateReadiness();
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
