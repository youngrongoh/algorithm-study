/**
 * @see https://www.acmicpc.net/problem/2581
 * @description
 * # Title: 소수
 * # Condition
 * 1. M, N은 10,000이하 자연수
 * 2. M <= N
 * # Problem
 * M이상 N이하의 자연수 중 소수인 것을 모두 골라
 * 첫째 줄에 그 합
 * 둘째 줄에 그 중 최솟값을 출력
 * 소수가 없을 경우는 첫째 줄에 -1을 출력
 * # Input
 * 첫째 줄에 M
 * 둘째 줄에 N
 * # Memo
 * @see
 * @arguments
 * `60
  100`
  `64
  65`
 */

function isDecimal(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function findAllDecimal(start, end) {
  const decimals = [];

  for (let i = start; i <= end; i++) {
    if (isDecimal(i)) decimals.push(i);
  }

  return decimals;
}

const sample = [
  `60
100`,
  `64
65`,
  `1
1`,
  `9999
10000`,
];

for (let i = 0; i < sample.length; i++) {
  const input = sample[i].split('\n');

  const m = Number(input[0]);
  const n = Number(input[1]);

  const decimals = findAllDecimal(m, n);

  if (decimals.length > 0) {
    const sum = decimals.reduce((sum, num) => sum + num, 0);
    const min = decimals[0];

    console.log(sum);
    console.log(min);
  } else {
    console.log(-1);
  }
}
