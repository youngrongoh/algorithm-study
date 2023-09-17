const funcs = require('./3-11399');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `5
3 1 4 3 2`;
      expect(func(input)).toBe(32);
    });
  });
  describe(func.name, () => {
    it('case2', () => {
      const input = `5
1 1 1 1 1`;
      expect(func(input)).toBe(15);
    });
  });
  describe(func.name, () => {
    it('case3', () => {
      const input = `5
1 2 3 4 1000`;
      expect(func(input)).toBe(1030);
    });
  });
  describe(func.name, () => {
    it('case3', () => {
      const input = `5
11 103 132 19 102`;
      expect(func(input)).toBe(775);
    });
  });
}