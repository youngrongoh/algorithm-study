/**
 * @see https://www.acmicpc.net/problem/10815
 * @description
 * # Title: 숫자 카드
 * ## Condition
 * ## Problem
 * M개의 정수 B가 적혀있는 숫자 카드가 N개의 카드 중에 있는지 판별하여 1 또는 0으로 표시
 * ## Input
 * 첫째 줄에 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)
 * 둘째 줄에는 숫자 카드에 적혀있는 N개의 정수 A(-10,000,000 <= A <= 10,000,000)
 * 셋째 줄에는 M(1 ≤ M ≤ 500,000)
 * 넷째 줄에는 상근이가 가지고 있는 숫자 카드인지 아닌지를 구해야 할 M개의 정수 B(-10,000,000 <= B <= 10,000,000)
 * ## Memo
 * 
 */

const func = (input) => {
  const [, ns, , ms] = input.split('\n').map((line) => line.split(' '));
  const nSet = new Set(ns);
  return ms.map((m) => Number(nSet.has(m))).join(' ');
};

const func1 = (input) => {
  const [, ns, , ms] = input.split('\n').map((line) => line.split(' '));
  return ms.map((m) => Number(ns.some((n) => m === n))).join(' ');
};

const variable = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`

const start = performance.now();
func(variable);
console.log('set', performance.now() - start);

const start1 = performance.now();
func1(variable);
console.log('loop', performance.now() - start1);

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
