

const { cutStickWithLaser, cutStickWithLaserWithStack } = require('./2-10799.js');

runTest(cutStickWithLaser);
runTest(cutStickWithLaserWithStack);

function runTest (cutStickWithLaser) {
  describe('cutStickWithLaser', () => {
    it('Input is not string', () => {
      const input = 1;
      expect(() => cutStickWithLaser(input)).toThrow('Input have to be string!');
    })

    it('case1', () => {
      const input = `()(((()())(())()))(())`;
      expect(cutStickWithLaser(input)).toBe(17);
    })

    it('case2', () => {
      const input = `(((()(()()))(())()))(()())`;
      expect(cutStickWithLaser(input)).toBe(24);
    })

    it('custom case1', () => {
      const input = `()`;
      expect(cutStickWithLaser(input)).toBe(0);
    })

    it('custom case2', () => {
      const input = `()()`;
      expect(cutStickWithLaser(input)).toBe(0);
    })

    it('custom case3', () => {
      const input = `(()())`;
      expect(cutStickWithLaser(input)).toBe(3);
    })

    it('custom case4', () => {
      const input = `(()(()())())`;
      expect(cutStickWithLaser(input)).toBe(8);
    })
  });
}