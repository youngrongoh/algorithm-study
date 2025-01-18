function solve(input) {
  const sums = new Set();
  // loopA: 모든 인덱스 순회 i 뽑기 -> N
    // loopB: a 다음부터 끝까지 순회 j 뽑기 -> N - i
  // => O(N^2)
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      sums.add(input[i] + input[j]);
    }
  }

  // sums의 최대 길이 N^2 -> O(N^2 * log(N^2))
  return [...sums].sort((a, b) => a - b);
}

module.exports = [ solve ];