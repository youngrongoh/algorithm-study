/**
 * @see https://www.acmicpc.net/problem/2231
 * @description
 * # Title: 분해합
 * # Condition
 * 분해합: 자연수 N과 N을 이루는 각 자리수의 합을 의미
 * 어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자
 * 생성자가 없을 수도 있음
 * 생성자가 여러 개일 수도 있음
 * # Problem
 * 첫째 줄에 N의 가장 작은 생성자을 출력
 * 생성자가 없는 경우에는 0을 출력
 * # Input
 * 첫째 줄에 자연수 N(1 ≤ N ≤ 1,000,000)
 * # Memo
 * 각 자리수
 * - 맨 앞자리: (맨 앞자리 수) - 1 ~ (맨 앞자리 수)
 * - 다른 자리수: 0~9
 * @see
 * @arguments
 * `216`
 */

function findConstructor(n) {
  for (let i = 0; i < n; i++) {
    const sumOfDigits = String(i)
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);

    const subSum = i + sumOfDigits;

    if (subSum === n) return i;
  }

  return 0;
}

const sample = ['216', '10', '25', '1025', '1'];

sample.forEach((input) => {
  const n = Number(input);

  const constructor = findConstructor(n);

  console.log(constructor);
});
