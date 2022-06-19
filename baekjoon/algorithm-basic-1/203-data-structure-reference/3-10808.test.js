const funcs = require('./3-10808');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `baekjoon`;
      expect(func(input)).toBe('1 1 0 0 1 0 0 0 0 1 1 0 0 1 2 0 0 0 0 0 0 0 0 0 0 0');
    });

    it('fruit', () => {
      const input = `fruit`;
      expect(func(input)).toBe('0 0 0 0 0 1 0 0 1 0 0 0 0 0 0 0 0 1 0 1 1 0 0 0 0 0');
    });

    it('36자', () => {
      const input = `hippopotomonstrosesquipedaliophobics`;
      expect(func(input)).toBe('1 1 1 1 2 0 0 2 4 0 0 1 1 1 7 5 1 1 4 2 1 0 0 0 0 0');
    });

    it('52자', () => {
      const input = `aequeosalinocalcalinoceraceoaluminosocupreovitriolic`;
      expect(func(input)).toBe('6 0 6 0 5 0 0 0 6 0 0 5 1 3 8 1 1 3 2 1 3 1 0 0 0 0');
    });
  });
}