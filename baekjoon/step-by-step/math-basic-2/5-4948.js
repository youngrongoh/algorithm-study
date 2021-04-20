/**
 * @see https://www.acmicpc.net/problem/4948
 * @description
 * # Title: 베르트랑 공준
 * # Condition
 * 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재
 * 
 * # Problem
 * 각 테스트 케이스에 대해서,
 * 소수 x의 개수를 출력 (n < x <= 2n)
 * # Input
 * 입력은 여러 개의 테스트 케이스로 이루어짐
 * 입력의 각 줄에 n (1 ≤ n ≤ 123,456)
 * 입력의 마지막에는 0
 * # Memo
 * @see
 * @arguments
 * `1
    10
    13
    100
    1000
    10000
    100000
    0`
 */

function countPrime(num) {
  const max = num * 2;
  const min = num + 1;

  const isPrimeArr = new Array(max + 1).fill(true);

  isPrimeArr[0] = false;
  isPrimeArr[1] = false;

  for (let i = 2; i <= max; i++) {
    if (!isPrimeArr[i]) continue;

    let square = Math.pow(i, 2);
    if (square > max) break;

    while (square <= max) {
      isPrimeArr[square] = false;
      square += i;
    }
  }

  return isPrimeArr.slice(min, max + 1).filter((isPrime) => isPrime).length;
}

const sample = `1
10
13
100
1000
10000
100000
123456
0`;

const input = sample.split('\n');

for (let testCase of input) {
  const n = Number(testCase);

  if (n === 0) break;

  const primeCount = countPrime(n);

  console.log(primeCount);
}
