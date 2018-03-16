import { Destroyer } from './destroyer';

describe('Destroyer', () => {
  /**
   *   0 1
   * 0 x
   * 1 x
   */
  describe('When a destroyeris created with to coordinates', () => {
    it('should create the destroyer', () => {
      expect(() => new Destroyer([[1, 1], [1, 2]])).not.toThrow();
    });
  });
});
