/**
 * @see https://www.acmicpc.net/problem/14425
 * @description
 * # Title: 문자열 집합
 * ## Condition
 * 입력으로 주어지는 문자열은 알파벳 소문자로만 이루어져 있으며, 길이는 500을 넘지 않음
 * 집합 S에 같은 문자열이 여러 번 주어지는 경우는 없음
 * ## Problem
 * 입력으로 주어지는 M개의 문자열 중에서 총 N개의 문자열로 이루어진 집합 S에 포함되어 있는 것이 총 몇 개인가
 * ## Input
 * 첫째 줄에 문자열의 개수 N과 M (1 ≤ N ≤ 10,000, 1 ≤ M ≤ 10,000)
 * 다음 N개의 줄에는 집합 S에 포함되어 있는 문자열
 * 다음 M개의 줄에는 검사해야 하는 문자열
 * 넷째 줄에는 상근이가 가지고 있는 숫자 카드인지 아닌지를 구해야 할 M개의 정수 B(-10,000,000 <= B <= 10,000,000)
 * ## Memo
 * 
 */

const func = (input) => {
  const [lengths, ...strs] = input.split('\n');
  const [n, m] = lengths.split(' ');
  const sSet = new Set(strs.slice(0, n));
  const ms = strs.slice(n, n + m);
  return ms.filter((m) => sSet.has(m)).length;
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
