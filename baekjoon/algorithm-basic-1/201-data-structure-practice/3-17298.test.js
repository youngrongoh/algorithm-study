const [ getNGEs, getNGEsWithStack1, getNGEsWithStack2 ] = require('./3-17298');

runTest(getNGEs);
runTest(getNGEsWithStack1);
runTest(getNGEsWithStack2);

function runTest(getNGEs) {
  describe(getNGEs.name, () => {
    it('case1', () => {
      const input = `4\n3 5 2 7`
      expect(getNGEs(input)).toBe('5 7 7 -1');
    })
  
    it('case2', () => {
      const input = `4\n9 5 4 8`
      expect(getNGEs(input)).toBe('-1 8 8 -1');
    })
  
    it('원소가 하나', () => {
      const input = `1\n1`
      expect(getNGEs(input)).toBe('-1');
    })

    it('원소가 하나', () => {
      const input = `1\n1000`
      expect(getNGEs(input)).toBe('-1');
    })

    it('반례', () => {
      const input = `5\n1 1 1 3 4`
      expect(getNGEs(input)).toBe('3 3 3 4 -1');
    })

    it('반례', () => {
      const input = `4\n3 2 5 3`
      expect(getNGEs(input)).toBe('5 5 -1 -1');
    })

    it('반례', () => {
      const input = `4\n1000000 912839 1234 1`
      expect(getNGEs(input)).toBe('-1 -1 -1 -1');
    })
  });
}
