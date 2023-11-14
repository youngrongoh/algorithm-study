const funcs = require('./5-13305');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('is case1', () => {
      const input = `4
2 3 1
5 2 4 1`;
      expect(func(input)).toBe('18');
    });

    it('is case2', () => {
      const input = `4
3 3 4
1 1 1 1`;
      expect(func(input)).toBe('10');
    });

    it('is case3', () => {
      const input = `4
1 1 1
2 3 1 4`;
      expect(func(input)).toBe('5');
    });

  });
}