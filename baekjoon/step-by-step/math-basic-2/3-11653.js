/**
 * @see https://www.acmicpc.net/problem/11653
 * @description
 * # Title: 소인수분해
 * # Condition
 * 1. 1 ≤ N ≤ 10,000,000
 * # Problem
 * N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력
 * N이 1인 경우 아무것도 출력하지 않음
 * # Input
 * 첫째 줄에 정수 N
 * # Memo
 * arr = []
 * if (N % D1 === 0) arr.push(d1) result = N / D1
 * if (result % D2 === 0) arr.push(d2) result = result / D2
 * ...
 * if(result / Dn === 1) break
 * @see
 * @arguments
 * `72`
  `3`
  `6`
  `9991`
 */

// 72 -> 36  ->  18   ->  9      -> 3         -> 1
// [] -> [2] -> [2,2] -> [2,2,2] -> [2,2,2,3] -> [2,2,2,3,3]
function factorize(num) {
  const factors = [];

  let result = num;
  for (let i = 2; result / i >= 1; i++) {
    if (result % i !== 0) continue;

    factors.push(i);
    result /= i;
    i--;
  }

  return factors;
}

const sample = [`72`, `3`, `6`, `2`, `9991`, `1`];

for (let i = 0; i < sample.length; i++) {
  const input = sample[i];
  const num = Number(input);

  const factors = factorize(num);

  console.log(factors.join('\n'));
  console.log('-----------');
}
