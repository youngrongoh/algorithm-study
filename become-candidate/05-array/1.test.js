const funcs = require('./1');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('example 1', () => {
      const input = [1, -5, 2, 4, 3];
      expect(func(input)).toEqual([-5, 1, 2, 3, 4]);
    });
    it('example 2', () => {
      const input = [2, 1, 1, 3, 2, 5, 4];
      expect(func(input)).toEqual([1, 1, 2, 2, 3, 4, 5]);
    });
    it('example 3', () => {
      const input = [6, 1, 7];
      expect(func(input)).toEqual([1, 6, 7]);
    });
  });
}