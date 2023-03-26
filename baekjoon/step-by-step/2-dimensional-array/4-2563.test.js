const funcs = require('./4-2563');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `3
3 7
15 7
5 2`;
      expect(func(input)).toBe(260);
    });

    it('case1', () => {
      const input = `3
3 7
10 5
5 2`;
      expect(func(input)).toBe(216);
    });
  });
}