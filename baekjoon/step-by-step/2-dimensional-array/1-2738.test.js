const funcs = require('./1-2738');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100`;
      expect(func(input)).toBe(`4 4 4
6 6 6
5 6 100`);
    });

    it('case2', () => {
      const input = `3 1
1
1
1
1
1
1`;
      expect(func(input)).toBe(`2\n2\n2`);
    });
  });
}