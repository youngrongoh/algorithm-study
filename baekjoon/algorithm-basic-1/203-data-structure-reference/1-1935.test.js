const funcs = require('./1-1935');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `5\nABC*+DE/-\n1\n2\n3\n4\n5`
      expect(func(input)).toBe(6.20);
    });

    it('case2', () => {
      const input = `1\nAA+A+\n1`
      expect(func(input)).toBe(3.00);
    });

    it('피연산자가 두 자리 이상 일 때', () => {
      const input = `6\nAB*C*D*E*F-\n100\n100\n100\n100\n20\n1`
      expect(func(input)).toBe(1999999999.00);
    });

    it('결과가 무한 소수일 때', () => {
      const input = `2\nAB/\n10\n3`;
      expect(func(input)).toBe(3.33);
    });

    it('소수점 아래 3번째 자리가 5 이상일 때 반올림하지 않는다', () => {
      const input = `2\nAB/\n100\n15`;
      expect(func(input)).toBe(6.66);
    });

    it('소수점 아래 3번째 자리까지 모두 0일 때', () => {
      const input = `3\nAA/A/B/C*\n100\n10\n6`;
      expect(func(input)).toBe(0.00);
    });

    it('결과가 20억 일 때', () => {
      const input = `1\nAA*A*A*A*A*A*A*A*A*B*\n10\n2`;
      expect(func(input)).toBe(Math.pow(10, 10) * 2);
    });

    it('결과가 -20억 일 때', () => {
      const input = `1\nAB-C*C*C*C*C*C*C*C*C*C*\n1\n3\n10`;
      expect(func(input)).toBe(Math.pow(10, 10) * -2);
    });

    it('피연산자가 하나일 때', () => {
      const input = `1\nA\n100`;
      expect(func(input)).toBe(100);
    });

    it('0.9999일 때 소수점 3번째 자리 이하 버림', () => {
      const input = `2\nAB/ABB*/+\n99\n100`;
      expect(func(input)).toBe(0.99);
    })

    it('-20억보다 크거나 같고 20억보다 작거나 같은 수', () => {
      const input = `6\nAB*C*D*E*F-\n100\n100\n100\n100\n20\n1`;
      expect(func(input)).toBe(1999999999.00);
    })
  })
}