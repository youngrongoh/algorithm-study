const funcs = require('./4-17299');

funcs.forEach(aFunc => runTest(aFunc));


function runTest(getNGFs) {
  describe('수열을 오등큰수 수열로 변환: ' + getNGFs.name, () => {
    it('case1', () => {
      const input = '7\n1 1 2 3 4 2 1';
      expect(getNGFs(input)).toBe('-1 -1 1 2 2 1 -1');
    });

    it('custom case1', () => {
      const input = '7\n1 3 2 3 2 2 1';
      expect(getNGFs(input)).toBe('2 2 -1 2 -1 -1 -1');
    });

    it('custom case2', () => {
      const input = '1\n1';
      expect(getNGFs(input)).toBe('-1');
    });
  });
}