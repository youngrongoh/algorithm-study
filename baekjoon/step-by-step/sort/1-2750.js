/**
 * @see https://www.acmicpc.net/problem/2750
 * @description
 * # Title: 수 정렬하기
 * # Condition
 * # Problem
 * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬
 * # Input
 * 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)
 * 둘째 줄부터 N개의 줄에는 숫자 (절댓값이 1,000보다 작거나 같은 정수)
 * 수는 중복되지 않음
 * # Memo
 *
 * @see
 * @arguments
 * `5
5
2
3
4
1`
 */

function sortAsc(nums) {
  const sorted = nums.sort((a, b) => a - b);

  return sorted.join('\n');
}

const sample = [
  `5
5
2
3
4
1`,
];

sample.forEach((input) => {
  const [n, ...nums] = input.split('\n');

  const sorted = sortAsc(nums);

  console.log(sorted);
});
