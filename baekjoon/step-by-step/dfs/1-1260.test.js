const funcs = require('./1-1260');

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
      input: `4 5 1
1 2
1 3
1 4
2 4
3 4`,
      output: `1 2 4 3
1 2 3 4`,
    },
    {
      input: `5 5 3
5 4
5 2
1 2
3 4
3 1`,
      output: `3 1 2 5 4
3 1 4 2 5`,
    },
    {
      input: `1000 1 1000
999 1000`,
      output: `1000 999
1000 999`,
    },
  ];
}