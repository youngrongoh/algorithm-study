function solve(input) {
  const result = [...new Set(input)];
  return result.sort((a, b) => b - a);
}

module.exports = [ solve ];