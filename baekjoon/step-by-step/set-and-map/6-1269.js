/**
 * @see https://www.acmicpc.net/problem/1269
 * @description
 * # Title: 대칭 차집합
 * ## Condition
 * 두 집합 A와 B가 있을 때, (A-B)와 (B-A)의 합집합은 A와 B의 대칭 차집합
 * ## Problem
 * 첫째 줄에 대칭 차집합의 원소의 개수를 출력
 * ## Input
 * 첫째 줄에 집합 A의 원소의 개수와 집합 B의 원소의 개수
 * 둘째 줄에는 집합 A의 모든 원소
 * 셋째 줄에는 집합 B의 모든 원소
 * ## Memo
 * 
 */

const func = (input) => {
  const [, arrA, arrB] = input.split('\n').map((line) => line.split(' '));
  const setB = new Set(arrB);
  const intersactionCount = arrA.filter((a) => setB.has(a)).length;
  return arrA.length + arrB.length - 2 * intersactionCount;
};

func('3 5\n1 2 4\n2 3 4 5 6');

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
