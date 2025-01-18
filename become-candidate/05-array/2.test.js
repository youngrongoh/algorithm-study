const funcs = require('./2');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('example 1', () => {
      const input = [4, 2, 2, 1, 3, 4];
      expect(func(input)).toEqual([4, 3, 2, 1]);
    });
    it('example 2', () => {
      const input = [2, 1, 1, 3, 2, 5, 4];
      expect(func(input)).toEqual([5, 4, 3, 2, 1]);
    });
  });
}