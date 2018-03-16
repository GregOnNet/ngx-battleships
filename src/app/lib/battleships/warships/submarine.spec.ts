import { Coordinate } from '../coordinate';
import { Submarine } from './submarine';

describe('Spawning a submarine', () => {
  it('should raise an error when more than 3 coordinates are provided', () => {
    expect(() =>
      new Submarine([[1, 1], [2, 1], [3, 1], [4, 1]])
    ).toThrowError('Submarine: The ship must have 3 coordinates.');
  });

  it('should raise an error when less than 3 coordinates are provided', () => {
    expect(() =>
      new Submarine([[1, 1], [2, 1]])
    ).toThrowError('Submarine: The ship must have 3 coordinates.');
  });
});
