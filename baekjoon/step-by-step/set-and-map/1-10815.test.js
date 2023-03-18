const funcs = require('./1-10815');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `5\n6 3 2 10 -10\n8\n10 9 -5 2 3 4 5 -10`;
      expect(func(input)).toBe('1 0 0 1 1 0 0 1');
    });
  });
}