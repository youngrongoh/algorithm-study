const funcs = require('./4-1012');

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
      input: `2
      10 8 17
      0 0
      1 0
      1 1
      4 2
      4 3
      4 5
      2 4
      3 4
      7 4
      8 4
      9 4
      7 5
      8 5
      9 5
      7 6
      8 6
      9 6
      10 10 1
      5 5`,
      output: `5
      1`,
    },
    {
      input: `1
      5 3 6
      0 2
      1 2
      2 2
      3 2
      4 2
      4 0`,
      output: '2',
    },
    {
      input: `1
      3 3 1
      1 0`,
      output: '1',
    }
  ].map((aCase) => Object.keys(aCase).reduce((acc, key) => {
    acc[key] = aCase[key].replace(/ {2}/g, '');
    return acc;
  }, {}));
}