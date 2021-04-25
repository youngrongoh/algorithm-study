/**
 * @see https://www.acmicpc.net/problem/9020
 * @description
 * # Title: 골드바흐의 추측
 * # Condition
 * - 소수: 1보다 큰 자연수 중에서  1과 자기 자신을 제외한 약수가 없는 자연수
 * - 골드바흐의 추측: "2보다 큰 모든 짝수는 두 소수의 합으로 나타낼 수 있다" -> 골드바흐 수
 * - 골드바흐 파티션: 짝수를 두 소수의 합으로 나타내는 표현
 * 1. 10000보다 작거나 같은 모든 짝수 n에 대한 골드바흐 파티션 존재 
 * 2. 가능한 n의 골드바흐 파티션이 여러 가지인 경우, 두 소수의 차이가 가장 작은 것을 출력
 * 3. 출력하는 소수는 작은 것부터 먼저 출력
 * 4. 공백으로 구분
 * # Problem
 * 각 테스트 케이스에 대해서 주어진 n의 골드바흐 파티션을 출력
 * # Input
 * 첫째 줄에 테스트 케이스의 개수 T
 * 각 테스트 케이스는 한 줄로 이루어진 짝수 n (4 ≤ n ≤ 10,000)
 * # Memo
 * (n의 두 골드바흐 수) < n
 * a + b === n
 * (a + b) % 2 === 0
 * 
 * @see
 * @arguments
 * `3
8
10
16`
 */

function getLowerPrimes(n) {
  const isPrimeArr = new Array(n).fill(true);

  isPrimeArr[0] = false;
  isPrimeArr[1] = false;

  for (let i = 2; i < n; i++) {
    if (!isPrimeArr[i]) continue;

    let square = Math.pow(i, 2);
    if (square > n) break;

    while (square < n) {
      isPrimeArr[square] = false;
      square += i;
    }
  }

  const primes = isPrimeArr.reduce((_primes, isPrime, num) => {
    if (isPrime) _primes.push(num);

    return _primes;
  }, []);

  return primes;
}

function getGoldbachNums(n) {
  const primes = getLowerPrimes(n);

  const partitions = [];
  for (let i = 0; i < primes.length; i++) {
    for (let j = i; j < primes.length; j++) {
      if (primes[i] + primes[j] !== n) continue;

      partitions.push([primes[i], primes[j]]);
    }
  }

  let indexOfMin = 0;
  let min = partitions[0][1] - partitions[0][0];
  for (let i = 1; i < partitions.length; i++) {
    const compared = partitions[i][1] - partitions[i][0];

    if (min < compared) continue;
    min = compared;
    indexOfMin = i;
  }

  return partitions[indexOfMin];
}

const sample = `3
8
10
16`;

const input = sample.split('\n');
const inputCount = Number(input[0]);

for (let i = 1; i <= inputCount; i++) {
  const n = Number(input[i]);
  const goldbachNums = getGoldbachNums(n);

  const resultString = goldbachNums.join(' ');

  console.log(resultString);
}
