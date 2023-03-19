const funcs = require('./2-14425');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `5 11
      baekjoononlinejudge
      startlink
      codeplus
      sundaycoding
      codingsh
      baekjoon
      codeplus
      codeminus
      startlink
      starlink
      sundaycoding
      codingsh
      codinghs
      sondaycoding
      startrink
      icerink`;
      expect(func(input)).toBe(4);
    });
  });
}