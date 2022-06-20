const funcs = require('./5-10820');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = 'This is String\nSPACE    1    SPACE\n S a M p L e I n P u T     \n0L1A2S3T4L5I6N7E8';
      expect(func(input)).toBe('10 2 0 2\n0 10 1 8\n5 6 0 16\n0 8 9 0');
    });
  });
}