/**
 * @see https://www.acmicpc.net/problem/1541
 * @description
 * # Title: 잃어버린 괄호
 * ## Condition
 * - 가장 처음과 마지막 문자는 숫자
 * - 연속해서 두 개 이상의 연산자가 나타나지 않음
 * - 5자리보다 많이 연속되는 숫자는 없음
 * - 수는 0으로 시작할 수 있음
 * - 식의 길이는 50보다 작거나 같음
 * ## Problem
 * 괄호를 적절히 쳐서 식의 최소값을 출력
 * ## Input
 * 첫째 줄에 0~9, +, -로 이루저진 식
 * ## Memo
 * 1. 최소값
 *    - +연산자만 있는 식(a+b+c+...): 항상 값은 결과
 *    - -연산자가 하나 있는 식(a+b-c...): -연산자 뒤에 식이 클수록 결과값은 작아짐
 *    - -연산자가 두 개 이상 있는 식(a+b-c+d-e+f+...): -연산자부터 다음 -연산자까지 식이 클수록 결과값은 작아짐
 *    => 첫번째 -연산자 뒤에 수는 전부 뺄셈
 * 2. 앞에 0 붙은 수에서 0 제거
 */

const solve = (input) => {
  const nums = input.replace(/-/g, s => '+'+s).split('+').map(s => parseInt(s, 10));
  let sum = 0;
  let minuses = false;
  for (let n of nums) {
    if (n < 0) minuses = true;
    if (minuses && n > 0) {
      sum -= n;
    } else {
      sum += n;
    };
  }
  return sum;
};

/* 
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim();
  const result = solve(input);
  console.log(result);

  function solve(input) {

  }
 */

module.exports = [ solve ];
