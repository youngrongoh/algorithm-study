const funcs = require('./8-10824');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = '10 20 30 40';
      expect(func(input)).toBe(4060);
    });
  });
}