const funcs = require('./4-10809');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `baekjoon`;
      expect(func(input)).toBe('1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1');
    });

    it('fruit', () => {
      const input = `fruit`;
      expect(func(input)).toBe('-1 -1 -1 -1 -1 0 -1 -1 3 -1 -1 -1 -1 -1 -1 -1 -1 1 -1 4 2 -1 -1 -1 -1 -1');
    });

    it('중복', () => {
      const input = `hippopoto`;
      expect(func(input)).toBe('-1 -1 -1 -1 -1 -1 -1 0 1 -1 -1 -1 -1 -1 4 2 -1 -1 -1 7 -1 -1 -1 -1 -1 -1');
    });
  });
}