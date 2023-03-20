const funcs = require('./6-1269');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `3 5
1 2 4
2 3 4 5 6`;
      expect(func(input)).toBe(4);
    });
  });
}