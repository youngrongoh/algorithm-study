/**
 * @see https://www.acmicpc.net/problem/1427
 * @description
 * # Title: 소트인사이드
 * # Condition
 * # Problem
 * 수의 각 자리수를 내림차순으로 정렬
 * # Input
 * 첫째 줄에 정렬하고자하는 수 N
 * (N은 1,000,000,000보다 작거나 같은 자연수)
 * # Memo
 *
 * @see
 * @arguments
 * Case1
 * `2143`
 */

function sortDigitsDesc(n) {
  const digits = String(n).split('');

  const sorted = digits.sort((a, b) => Number(b) - Number(a));

  return Number(sorted.join(''));
}

const sample = [`2143`, `64371235789`];

sample.forEach((input) => {
  const n = Number(input);

  const descNum = sortDigitsDesc(n);

  console.log(descNum);
});
