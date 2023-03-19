/**
 * @see https://www.acmicpc.net/problem/10816
 * @description
 * # Title: 숫자 카드 2
 * ## Condition
 * 각 수가 적힌 숫자 카드를 상근이가 몇 개 가지고 있는지를 공백으로 구분
 * ## Problem
 * 정수 M개가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 출력
 * ## Input
 * 첫째 줄에 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)
 * 둘째 줄에는 숫자 카드에 적혀있는 N개의 정수 A(-10,000,000 <= A <= 10,000,000)
 * 셋째 줄에는 M(1 ≤ M ≤ 500,000)
 * 넷째 줄에는 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야 할 M개의 정수
 * ## Memo
 * 
 */

const func = (input) => {
  const [, ns, , ms] = input.split('\n').map((line) => line.split(' '));
  const countsMap = ns.reduce((acc, n) => {
    const key = n.trim();
    if (acc[key] == null) acc[key] = 1;
    else acc[key] += 1;
    return acc;
  }, {});
  return ms.map((m) => countsMap[m] ?? 0).join(' ');
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
