/**
 * @see https://www.acmicpc.net/problem/10824
 * @description
 * # Title: 네 수
 * ## Condition
 * ## Problem
 * A와 B를 붙인 수와 C와 D를 붙인 수의 합
 * ## Input
 * 네 자연수 A, B, C, D (1 ≤ A, B, C, D ≤ 1,000,000)
 * ## Memo
 * 
 */

 const func = (input) => {
  let result = 0;
  let prev = '';
  const numbers = input.trim().split(' ');

  numbers.forEach((num, i) => {
    if (i % 2 === 0) {
      prev = num;
    } else {
      const composited = [prev, num].join('');
      result += parseInt(composited);
    }
  })
  
  return result;
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
