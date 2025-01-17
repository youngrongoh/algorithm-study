function solve(input) {
  let result = [...input];
  return result.sort((a, b) => a - b);
}

module.exports = [ solve ];