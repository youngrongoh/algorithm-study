const funcs = require('./2-2606');

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
6
1 2
2 3
1 5
5 2
5 6
4 7`,
      output: 4,
    },
  ];
}