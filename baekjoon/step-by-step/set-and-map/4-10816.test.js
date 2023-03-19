const funcs = require('./4-10816');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`;
      expect(func(input)).toBe(`3 0 0 1 2 0 0 2`);
    });
  });
}