const funcs = require('./3-2667');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    getBasicCases().forEach(({ input, output }, i) => {
      it(`is basic case${i + 1}`, () => {
        expect(func(input)).toBe(output);
      });
    });
  });
};

function getBasicCases () {
  return [
    {
      input: `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`,
      output: `3
7
8
9`,
    },
  ];
}