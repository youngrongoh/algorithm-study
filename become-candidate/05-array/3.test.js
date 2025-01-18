const funcs = require('./3');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('example 1', () => {
      const input = [2, 1, 3, 4, 1];
      expect(func(input)).toEqual([2, 3, 4, 5, 6, 7]);
    });
    it('example 2', () => {
      const input = [5, 0, 2, 7];
      expect(func(input)).toEqual([2, 5, 7, 9, 12]);
    });
  });
}