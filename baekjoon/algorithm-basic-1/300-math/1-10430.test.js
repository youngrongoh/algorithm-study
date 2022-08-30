const funcs = require('./1-10430');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = '5 8 4';
      expect(func(input)).toBe('1\n1\n0\n0');
    });
  });
}