import { Coordinate } from '../coordinate';
import { Warhsip } from './warship';

describe('Spawning a Battleship', () => {
  /**
   *   1
   * 1 x
   * 2 x
   * 3 x
   */
  it('should has coordinates aligned vertical', () => {
    const battleShip = new Warhsip([[1, 1], [2, 1], [3, 1]], 3);
    expect(battleShip.coordinates.length).toBe(3);
  });

  /**
   *   1 2 3
   * 1 x x x
   */
  it('should has coordinates aligned vertical', () => {
    const battleShip = new Warhsip([[1, 1], [2, 1], [3, 1]], 3);
    expect(battleShip.coordinates.length).toBe(3);
  });

  it('should raise an error if coodinates are smaller then [1, 1]', () => {
    expect(() =>
      new Warhsip([[0, 0]], 1)
    ).toThrow();
  });

  /**
   *   1 2
   * 1 x
   * 2   x
   * 3 x
   */
  it('should raise an error if coodinates are diagonal', () => {
    expect(() =>
      new Warhsip([[1, 1], [2, 2], [1, 3]], 3)
    ).toThrow();
  });

  /**
   *   1 2
   * 1 x x
   * 2   x
   */
  it('should raise an error if ship goes round the corner ', () => {
    expect(() =>
      new Warhsip([[1, 1], [2, 1], [2, 2]], 3)
    ).toThrow();
  });

  /**
   *   1 2
   * 1 x
   * 2
   * 3 x
   */
  it('should raise an error if coodinates are the same', () => {
    expect(() =>
      new Warhsip([[1, 1], [1, 1], [1, 3]], 3)
    ).toThrow();
  });

  /**
   *   1 2 3
   * 1 x
   * 2     x
   * 3 x
   */
  it('should raise an error if coodinates are no neighbours', () => {
    expect(() =>
      new Warhsip([[1, 1], [3, 1], [1, 3]], 3)
    ).toThrow();
  });
});

describe('Destroying a Battleship', () => {
  it('should destroy a part of the ship after it was hit', () => {
    const battleship = new Warhsip([[1, 1], [2, 1]], 2);
    battleship.hit([1, 1]);

    expect(battleship.intactParts).toEqual([new Coordinate(2, 1)]);
  });
});
