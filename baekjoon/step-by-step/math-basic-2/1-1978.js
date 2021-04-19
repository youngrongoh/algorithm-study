/**
 * @see https://www.acmicpc.net/problem/1978
 * @description
 * # Title: 소수 찾기
 * # Problem
 * 주어진 수 N개 중에서 소수의 개수를 출력
 * # Input
 * 첫 줄에 수의 개수 N (N < 100)
 * 둘째 줄에 N개의 1000 이하 자연수
 * # Memo
 * 소수: 1보다 큰 자연수 중 1과 자기 자신만을 약수로 가지는 수
 * if (x > 1)
 * for (let i = 2; i < x; i++)
 * x % i === 0
 * @see
 * @arguments
 * `4
    1 3 5 7`
 */

function countPrime(nums) {
  const count = nums.reduce((count, numString) => {
    const num = Number(numString);
    if (num <= 1) return count;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) return count;
    }

    return count + 1;
  }, 0);

  return count;
}

const sample = `4
1 3 5 7`;

const input = sample.split('\n');
const nums = input[1].split(' ');

const primeCount = countPrime(nums);

console.log(primeCount);
