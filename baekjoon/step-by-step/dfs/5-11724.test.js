const funcs = require('./5-11724');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    getBasicCases().forEach(({ input, output }, i) => {
      it(`is basic case${i + 1}`, () => {
        expect(func(input) == output).toBe(true);
      });
    });
  });
};

function getBasicCases () {
  return [
    {
      input: `6 5
      1 2
      2 5
      5 1
      3 4
      4 6`,
      output: '2',
    },
    {
      input: `6 8
      1 2
      2 5
      5 1
      3 4
      4 6
      5 4
      2 4
      2 3`,
      output: '1',
    },
  ].map((aCase) => Object.keys(aCase).reduce((acc, key) => {
    acc[key] = aCase[key].replace(/ {2}/g, '');
    return acc;
  }, {}));
}