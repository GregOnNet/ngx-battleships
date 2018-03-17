import { Submarine } from '.';
import { Game } from './game';
import { GameConfig } from './game-config';
import { Destroyer } from './warships/destroyer';

describe('Game is not ready', () => {
  describe('When a game does not have 5 destroyer', () => {
    it('should indicate that the game is not ready', () => {
      const config: GameConfig = { neededShips: { destroyer: 5 } };
      const game = new Game(config);
      const destroyer = new Destroyer([[1, 1], [1, 2]]);
      game.spawnWarship(destroyer);

      expect(game.isReadyToPlay).toBe(false);
    });
  });

  describe('When two warships have a same coordinate', () => {
    it('should fail', () => {
      const config: GameConfig = { neededShips: { destroyer: 2 } };
      const game = new Game(config);
      const destroyer = new Destroyer([[1, 1], [1, 2]]);

      game.spawnWarship(destroyer);

      expect(() => game.spawnWarship(destroyer)).toThrow();
    });
  });
});

describe('Game is ready to play', () => {
  describe('When a game has all needed destroyers', () => {
    it('should be ready', () => {
      const config: GameConfig = { neededShips: { destroyer: 2 } };
      const game = new Game(config);
      const destroyer_1 = new Destroyer([[1, 1], [1, 2]]);
      const destroyer_2 = new Destroyer([[3, 3], [3, 4]]);

      game.spawnWarship(destroyer_1);
      game.spawnWarship(destroyer_2);

      expect(game.isReadyToPlay).toBe(true);
    });
  });

  describe('When a game has all needed submarines and destroyers', () => {
    it('should be ready', () => {
      const config: GameConfig = {
        neededShips: { destroyer: 2, submarine: 3 }
      };

      const game = new Game(config);

      const warships = [
        new Destroyer([[1, 1], [1, 2]]),
        new Destroyer([[2, 1], [2, 2]]),
        new Submarine([[1, 3], [1, 4], [1, 5]]),
        new Submarine([[2, 3], [2, 4], [2, 5]]),
        new Submarine([[3, 3], [3, 4], [3, 5]])
      ];

      warships.forEach(warship => game.spawnWarship(warship));

      expect(game.isReadyToPlay).toBe(true);
    });
  });
});
