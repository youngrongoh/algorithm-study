const funcs = require('./4');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('example 1', () => {
      const input = [1, 2, 3, 4, 5];
      expect(func(input)).toEqual([1]);
    });
    it('example 2', () => {
      const input = [1, 3, 2, 4, 2];
      expect(func(input)).toEqual([1, 2, 3]);
    });
  });
}