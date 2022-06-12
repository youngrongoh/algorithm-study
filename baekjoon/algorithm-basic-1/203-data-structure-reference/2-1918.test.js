const funcs = require('./2-1918');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `A*(B+C)`
      expect(func(input)).toBe('ABC+*');
    });

    it('case2', () => {
      const input = `A+B`
      expect(func(input)).toBe('AB+');
    });

    it('case3', () => {
      const input = `A+B*C`
      expect(func(input)).toBe('ABC*+');
    });

    it('case4', () => {
      const input = `A+B*C-D/E`
      expect(func(input)).toBe('ABC*+DE/-');
    });

    it('연산자 1개 덧셈', () => {
      const input = `A+B`
      expect(func(input)).toBe('AB+');
    });

    it('연산자 1개 뺄셈', () => {
      const input = `A-B`
      expect(func(input)).toBe('AB-');
    });

    it('연산자 1개 곱셈', () => {
      const input = `A*B`
      expect(func(input)).toBe('AB*');
    });

    it('연산자 1개 나눗셈', () => {
      const input = `A/B`
      expect(func(input)).toBe('AB/');
    });

    it('연산자 2개 곱셈이 앞에 나오는 경우', () => {
      const input = `A*B+C`
      expect(func(input)).toBe('AB*C+');
    });

    it('연산자 2개 나눗셈이 앞에 나오는 경우', () => {
      const input = `A/B+C`
      expect(func(input)).toBe('AB/C+');
    });

    it('연산자 3개 곱셈이 중간에 나오는 경우', () => {
      const input = `A+B*C-D`
      expect(func(input)).toBe('ABC*+D-');
    });

    it('연산자 3개 곱셈이 끝에 나오는 경우', () => {
      const input = `A+B-C*D`
      expect(func(input)).toBe('AB+CD*-');
    });

    it('괄호가 앞에 나오는 경우', () => {
      const input = `(A+B)*C`
      expect(func(input)).toBe('AB+C*');
    });

    it('괄호가 중간에 나오는 경우', () => {
      const input = `A*(B+C)-D`
      expect(func(input)).toBe('ABC+*D-');
    });

    it('괄호가 끝에 나오는 경우', () => {
      const input = `A*B+(C-D)`
      expect(func(input)).toBe('AB*CD-+');
    });

    it('괄호 2쌍이 중첩된 경우', () => {
      const input = `A*(B+(C-D))`
      expect(func(input)).toBe('ABCD-+*');
    });

    it('괄호 3쌍이 중첩된 경우', () => {
      const input = `(A*(B+(C-D))+E)`
      expect(func(input)).toBe('ABCD-+*E+');
    });

    it('중첩 괄호, 같은 연산자', () => {
      const input = `A+(B+(C+D))`
      expect(func(input)).toBe('ABCD+++');
    });

    it('중첩 괄호, 같은 우선순위 연산자', () => {
      const input = `A+(B-(C+D))`
      expect(func(input)).toBe('ABCD+-+');
    });

    it('괄호가 병렬', () => {
      const input = `(A+B)*(C-D)`
      expect(func(input)).toBe('AB+CD-*');
    });

    it('괄호가 병렬, 중첩', () => {
      const input = `(A+(B*C)-D)*(E-(F/G))`
      expect(func(input)).toBe('ABC*+D-EFG/-*');
    });

    it('괄호가 병렬, 중첩', () => {
      const input = `(A-(B+C)*D)*((E-F/G)*H)`
      expect(func(input)).toBe('ABC+D*-EFG/-H**');
    });
  });
}