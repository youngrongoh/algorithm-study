/**
 * @see https://www.acmicpc.net/problem/2751
 * @description
 * # Title: 수 정렬하기2
 * # Condition
 * # Problem
 * 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력
 * # Input
 * 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)
 * 둘째 줄부터 N개의 줄에는 숫자
 * (절댓값이 1,000,000보다 작거나 같은 정수)
 * (수는 중복되지 않음)
 * # Memo
 *
 * @see
 * @arguments
 * `5
5
4
3
2
1`
 */

// 2021.5.13 sort 메소드로 풀기
function sortAsc(nums) {
  const sorted = nums.sort((a, b) => a - b);

  return sorted.join('\n');
}

const sample = [
  `5
5
4
3
2
1`,
];

sample.forEach((input) => {
  const [n, ...nums] = input.split('\n');

  const sorted = sortAsc(nums);

  console.log(sorted);
});
