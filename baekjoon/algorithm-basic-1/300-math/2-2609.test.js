const funcs = require('./2-2609');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = '24 18';
      expect(func(input)).toBe('6\n72');
    });
  });
}