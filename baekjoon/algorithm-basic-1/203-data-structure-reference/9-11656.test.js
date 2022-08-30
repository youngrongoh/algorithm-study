const funcs = require('./9-11656');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = 'baekjoon';
      expect(func(input)).toBe('aekjoon\nbaekjoon\nekjoon\njoon\nkjoon\nn\non\noon');
    });
    it('aabba', () => {
      const input = 'aabba';
      expect(func(input)).toBe('a\naabba\nabba\nba\nbba');
    });
  });
}