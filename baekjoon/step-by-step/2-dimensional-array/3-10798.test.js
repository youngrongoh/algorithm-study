const funcs = require('./3-10798');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `ABCDE
abcde
01234
FGHIJ
fghij`;
      expect(func(input)).toBe(`Aa0FfBb1GgCc2HhDd3IiEe4Jj`);
    });

    it('case2', () => {
      const input = `AABCDD
afzz
09121
a8EWg6
P5h3kx`;
      expect(func(input)).toBe(`Aa0aPAf985Bz1EhCz2W3D1gkD6x`);
    });
  });
}