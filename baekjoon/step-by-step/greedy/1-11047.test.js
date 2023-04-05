const funcs = require('./1-11047');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`;
      expect(func(input)).toBe(6);
    });
    it('case2', () => {
      const input = `10 4790
1
5
10
50
100
500
1000
5000
10000
50000`;
      expect(func(input)).toBe(12);
    });
  });
}