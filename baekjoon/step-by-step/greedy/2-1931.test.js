const funcs = require('./2-1931');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`;
      expect(func(input)).toBe(4);
    });
  });
  describe(func.name, () => {
    it('case2', () => {
      const input = `4
1 2
3 100
4 5
5 6`;
      expect(func(input)).toBe(3);
    });
  });
  describe(func.name, () => {
    it('case3', () => {
      const input = `3
0 0
0 0
0 0`;
      expect(func(input)).toBe(3);
    });
  });
  describe(func.name, () => {
    it('case4', () => {
      const input = `3
4 4
3 4
2 4`;
      expect(func(input)).toBe(2);
    });
  });
}