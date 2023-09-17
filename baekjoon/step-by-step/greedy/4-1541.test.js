const funcs = require('./4-1541');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `55-50+40`;
      expect(func(input)).toBe(-35);
    });
    it('case2', () => {
      const input = `10+20+30+40`;
      expect(func(input)).toBe(100);
    });
    it('case3', () => {
      const input = `00009-00009`;
      expect(func(input)).toBe(0);
    });
    it('case4', () => {
      const input = `80+20-10+20-40+10`;
      expect(func(input)).toBe(20);
    });
  });
}