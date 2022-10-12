/**
 * @see https://www.acmicpc.net/problem/2609
 * @description
 * # Title: 최대공약수와 최소공배수
 * ## Condition
 * ## Problem
 * 첫째 줄에 입력으로 주어진 두 수의 최대공약수
 * 둘째 줄에 입력으로 주어진 두 수의 최소 공배수를 출력
 * ## Input
 * 첫째 줄에는 두 개의 자연수(10,000이하의 자연수, 사이에 한 칸의 공백)
 * ## Memo
 * 
 */

const func = (input) => {
  let [a, b] = input.split(' ').map(n => +n);

  // 최대공약수
  const small = Math.min(a, b);
  const primeChecker = new Array(small + 1).fill(true);
  primeChecker[0] = primeChecker[1] = false;

  for (let i = 2; i < small; i++) {
    const isPrime = primeChecker[i];
    if (!isPrime) continue;

    for (let j = 2; j <= Math.sqrt(small); j++) {
      primeChecker[i * j] = false;
    }
  }

  const primesLessThanMin = primeChecker.reduce((acc, isPrime, i) => {
    if (isPrime) acc.push(i);
    return acc;
  }, []);
  
  const commonDivisors = primesLessThanMin.filter((prime) => a % prime === 0 && b % prime === 0);
  const largestCommonDivisor = commonDivisors.reduce((multiple, cd) => multiple * cd);

  // 최소공배수
  const large = Math.max(a, b);
  const isDivisorOfLarge = large % small === 0;
  let minimumCommonMultiple = large;
  if (!isDivisorOfLarge) {
    for (let i = 1; i <= small; i++) {
      const multipleOfLarge = large * i;
      if (multipleOfLarge % small > 0) continue;
      minimumCommonMultiple = multipleOfLarge;
      break;
    }
  }

  return largestCommonDivisor + '\n' + minimumCommonMultiple;
};

/* 
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim();
  const result = solve(input);
  console.log(result);

  function solve(input) {

  }
 */
// const forSubmit = (input) => {
  
// }

module.exports = [ func ];
