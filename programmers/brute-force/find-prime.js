/**
 * @see https://programmers.co.kr/learn/courses/30/lessons/42839
 * @description
 * # Title: 소수 찾기
 * # Condition
 * 0~9까지 숫자가 적힌 종이 조각 을 붙여 소수를 몇 개 만들 수 있는지 알아내려 함
 * # Problem
 * 종이 조각으로 만들 수 있는 소수가 몇 개인지 return
 * # Input
 * 숫자가 적힌 문자열 numbers(길이 1 이상 7 이하)
 * # Memo
 * 순열 이용하여 가능한 모든 조합 찾기
 * 셋을 이용해 중복 값 제거
 * @see https://velog.io/@proshy/JS%EC%88%9C%EC%97%B4%EC%A1%B0%ED%95%A9%EC%A4%91%EB%B3%B5%EC%88%9C%EC%97%B4-%EA%B5%AC%ED%95%98%EA%B8%B0
 * @see https://mathbang.net/545
 * @see https://ko.javascript.info/map-set
 * @arguments
 * ## Case 1
 * numbers: "17"
 * ## Case 2
 * numbers: "011"
 */

/* 2021.5.4 실패
function isPrime(numStr) {
  const n = Number(numStr);

  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) return false;
  }

  return true;
}

function solution(numbers) {
  const papers = [...numbers];
  const length = papers.length;

  const primes = [];

  for (let i = 0; i < length; i++) {
    const paper = papers[i];

    if (isPrime(paper)) {
      primes.push(Number(paper));
    }
    for (let j = 0; j < length; j++) {
      if (j === i) continue;

      let combined = paper + papers[j];
      for (let k = 0; k <= length; k++) {
        if (k === j || k === i) continue;

        if (isPrime(combined)) {
          primes.push(Number(combined));
        }

        combined += k < length ? papers[k] : '';
      }
    }
  }
  console.log([...new Set(primes)]);
  return [...new Set(primes)].length;
}
 */

function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }

  return n > 1;
}

function permutation(numbers, count) {
  const result = [];

  if (count === 1) return numbers;

  numbers.forEach((fixer, i) => {
    const restArr = numbers.filter((_, index) => index !== i);
    const permutationArr = permutation(restArr, count - 1);

    const combineFixer = permutationArr.map((numArr) => fixer + numArr);

    result.push(...combineFixer);
  });

  return result;
}

function solution(numbers) {
  const numberArr = [...numbers];

  const primes = [];

  for (let i = 1; i <= numberArr.length; i++) {
    permutation(numberArr, i).forEach((n) => {
      const number = Number(n);
      if (isPrime(number)) primes.push(number);
    });
  }

  return new Set(primes).size;
}

const sample = ['17', '011', '2357', '111111', '1234567'];

sample.forEach((numbers) => {
  const result = solution(numbers);

  console.log(result);
});
