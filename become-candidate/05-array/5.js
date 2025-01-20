function solve(arr1, arr2) {
  const result = Array.from(
    { length: arr1.length },
    () => Array.from(
      { length: arr2[0].length },
      () => 0,
    )
  );

  for (const [i, row] of arr1.entries()) {
    for (const [k, a] of row.entries()) {
      for (const [j, b] of arr2[k].entries()) {
        result[i][j] += a * b;
      }
    }
  }

  return result;
}

module.exports = [ solve ];