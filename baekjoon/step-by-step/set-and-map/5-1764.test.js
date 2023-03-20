const funcs = require('./5-1764');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`;
      expect(func(input)).toBe(`2\nbaesangwook\nohhenrie`);
    });
  });
}