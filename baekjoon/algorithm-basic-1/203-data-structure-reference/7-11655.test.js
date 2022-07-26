const funcs = require('./7-11655');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = 'Baekjoon Online Judge';
      expect(func(input)).toBe('Onrxwbba Bayvar Whqtr');
    });
    it('case2', () => {
      const input = 'One is 1';
      expect(func(input)).toBe('Bar vf 1');
    });

    it('multi space', () => {
      const input = 'One is 1   123';
      expect(func(input)).toBe('Bar vf 1   123');
    });

    it('space', () => {
      const input = ' a';
      expect(func(input)).toBe(' n');
    });
  });
}