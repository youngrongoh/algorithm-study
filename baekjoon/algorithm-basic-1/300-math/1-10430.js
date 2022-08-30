/**
 * @see https://www.acmicpc.net/problem/10430
 * @description
 * # Title: 나머지
 * ## Condition
 * ## Problem
 * 첫째 줄에 (A+B)%C,
 * 둘째 줄에 ((A%C) + (B%C))%C,
 * 셋째 줄에 (A×B)%C,
 * 넷째 줄에 ((A%C) × (B%C))%C를 출력
 * ## Input
 * 첫째 줄에 A, B, C (2 ≤ A, B, C ≤ 10000)
 * ## Memo
 * 
 */

 const func = (input) => {
  const [a, b, c] = input.split(' ').map(num => parseInt(num));

  return [
    (a+b)%c,
    ((a%c)+(b%c))%c,
    (a*b)%c,
    ((a%c)*(b%c))%c,
  ].join('\n');
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
