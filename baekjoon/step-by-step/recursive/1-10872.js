/**
 * @see https://www.acmicpc.net/problem/10872
 * @description
 * # Title: 팩토리얼
 * # Condition
 * # Problem
 * 첫째 줄에 N!을 출력
 * # Input
 * 첫째 줄에 정수 N(0 ≤ N ≤ 12)
 * # Memo
 * 팩토리얼: 1부터 양의 정수 n까지 모든 정수들의 곱
 * 0!=1로 약속
 * @see
 * @arguments
 * `10`
 * `0`
 */

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

const sample = ['10', '0'];

sample.forEach((input) => {
  const n = Number(input);

  const result = factorial(n);

  console.log(result);
});
