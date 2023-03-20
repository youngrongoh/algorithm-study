const funcs = require('./7-11478');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `ababc`;
      expect(func(input)).toBe(12);
    });
  });
}