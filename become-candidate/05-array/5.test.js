const funcs = require('./5');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('example 1', () => {
      const arr1 = [[1,4], [3,2], [4,1]];
      const arr2 = [[3,3],[3,3]];
      expect(func(arr1, arr2)).toEqual([[15,15], [15,15], [15,15]]);
    });
    it('example 2', () => {
      const arr1 = [[2,3,2], [4,2,4], [3,1,4]];
      const arr2 = [[5,4,3], [2,4,1], [3,1,1]];
      expect(func(arr1, arr2)).toEqual([[22,22,11], [36,28,18], [29,20,14]]);
    });

    it('additional example 1', () => {
      const arr1 = [[1,4], [3,2], [4,1]];
      const arr2 = [[3,3,3], [3,3,3]];
      expect(func(arr1, arr2)).toEqual([[15,15,15], [15,15,15], [15,15,15]]);
    });
  });
}