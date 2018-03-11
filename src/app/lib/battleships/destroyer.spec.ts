
describe('Spawning a Destroyer', () => {

  /**
   *   1 2
   * 1 x
   * 2 x
   */
  it('should has two coordinates', () => {
    const first = new Coordinate(1, 1);
    const second = new Coordinate(1, 2);

    const destroyer = new Destroyer(first, second);
    expect(destroyer.coordinates[0]).toBe(first);
    expect(destroyer.coordinates[1]).toBe(second);
  });

  /**
   *   1 2
   * 1 x
   * 2   x
   */
  it('should raise an error if coodinates are diagonal', () => {
    const first = new Coordinate(1, 1);
    const second = new Coordinate(2, 2);

    expect(() => new Destroyer(first, second)).toThrow();
  });

  /**
   *   1
   * 1 x
   */
  it('should raise an error if coodinates are the same', () => {
    const first = new Coordinate(1, 1);
    const second = new Coordinate(1, 1);

    expect(() => new Destroyer(first, second)).toThrow();
  });

  /**
   *   1 2 |   1 2 3 |   1 2
   * 1 x   | 1 x   x | 1   x
   * 2     | 2       | 2
   * 3 x   |         | 3 x
   */
  it('should raise an error if coodinates are no neighbours', () => {
    const invalidCoodinates = [
      { first: new Coordinate(1, 1), second: new Coordinate(1, 3) },
      { first: new Coordinate(1, 1), second: new Coordinate(3, 1) },
      { first: new Coordinate(1, 3), second: new Coordinate(2, 1) }
    ];

    invalidCoodinates.forEach(c => {
      expect(() => new Destroyer(c.first, c.second)).toThrow();
    });
  });
});

export class Coordinate {
  constructor(public x: number, public y: number) {}

  isEqual(other: Coordinate) {
    return this.x === other.x && this.y === other.y;
  }
}

export class Destroyer {
  coordinates: Coordinate[];

  constructor(first: Coordinate, second: Coordinate) {
    this._throwIfEqual(first, second);
    this._throwIfDiagonal(first, second);
    this._throwIfNoDirectNeighbour(first, second);

    this.coordinates = [first, second];
  }

  _throwIfEqual(first: Coordinate, second: Coordinate) {
    if (first.isEqual(second)) {
      throw new Error('Equality forbidden');
    }
  }

  _throwIfDiagonal(first: Coordinate, second: Coordinate) {
    if (first.x < second.x && first.y < second.y) {
      throw new Error('Diagonal forbidden');
    }
  }

  _throwIfNoDirectNeighbour(first: Coordinate, second: Coordinate) {
    if (this._distanceOf(first.x, second.x) > 1 ||
        this._distanceOf(first.y, second.y) > 1 ) {
      throw new Error('No neighbour forbidden');
    }
  }

  private _distanceOf(first: number, second: number): number {
    return Math.abs(first - second);
  }
}
