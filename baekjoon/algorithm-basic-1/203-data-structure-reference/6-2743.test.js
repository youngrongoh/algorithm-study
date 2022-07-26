const funcs = require('./6-2743');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = 'pulljima';
      expect(func(input)).toBe(8);
    });
  });
}