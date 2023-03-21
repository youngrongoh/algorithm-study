/**
 * @see https://www.acmicpc.net/problem/2738
 * @description
 * # Title: 행렬 덧셈
 * ## Condition
 * ## Problem
 * 첫째 줄부터 N개의 줄에 행렬 A와 B를 더한 행렬을 출력
 * ## Input
 * 첫째 줄에 행렬의 크기 N 과 M(N, M <= 100)
 * 둘째 줄부터 N개의 줄에 행렬 A의 원소 M개
 * 이어서 N개의 줄에 행렬 B의 원소 M개
 * ## Memo
 * 
 */

const func = (input) => {
  const [[n], ...rows] = input.split('\n').map((line) => line.split(' ').map((item) => +item));
  const a = rows.slice(0, n);
  const b = rows.slice(n, 2 * n);
  return a.map((row, i) => row.map((item, j) => item + b[i][j]).join(' ')).join('\n');
};

console.log(func(`3 1
1
1
1
1
1
1`))

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
