/**
 * @see https://www.acmicpc.net/problem/1929
 * @description
 * # Title: 소수 구하기
 * # Condition
 * # Problem
 * M이상 N이하의 소수를 한 줄에 하나씩, 증가하는 순서대로 출력
 * # Input
 * 첫째 줄에 자연수 M과 N
 * (1 ≤ M ≤ N ≤ 1,000,000, M과 N사이에 소수는 하나 이상)
 * # Memo
 * 에라토스테네스의 체: 소수를 찾는 방법
 * 2부터 소수를 찾고 그 소수의 배수는 전부 제외 시킴
 * 1. x^2보다 작은 x의 배수는 x * y (y는 x보다 작은 자연수)와 같으므로
 * 이미 y에 의해 소수인지 아닌지 판별된 수
 * 따라서, 다시 그 수들을 판별할 필요가 없으므로 x^2부터 판별
 * 2. x^2이 n보다 커지는 경우 이미 x^2 이하의 범위에서 판별이 완료된 것이므로 정지ㅑ
 * @see https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4
 * @arguments
 * `3 16`
 */

function findAllPrimes(start, end) {
  const isPrimeArr = new Array(end + 1);

  isPrimeArr.fill(true);

  isPrimeArr[0] = false;
  isPrimeArr[1] = false;

  for (let i = 2; i < end + 1; i++) {
    if (!isPrimeArr[i]) continue;

    let square = Math.pow(i, 2);

    if (square > end) break;

    while (square < end + 1) {
      isPrimeArr[square] = false;
      square += i;
    }
  }

  return isPrimeArr.reduce((primes, isPrime, prime) => {
    if (isPrime && prime >= start) primes.push(prime);
    return primes;
  }, []);
}

const sample = `3 16`;

const input = sample.split(' ');

const m = Number(input.shift());
const n = Number(input.shift());

const primes = findAllPrimes(m, n);

console.log(primes.join('\n'));
