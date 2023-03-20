/**
 * @see https://www.acmicpc.net/problem/1764
 * @description
 * # Title: 듣보잡
 * ## Condition
 * ## Problem
 * 듣보잡의 수와 그 명단을 사전순으로 출력
 * ## Input
 * 첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M
 * 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름, N+2째 줄부터 보도 못한 사람의 이름(중복되는 이름 없음)
 * ## Memo
 * 
 */

const func = (input) => {
  const [lengths, ...strs] = input.split('\n');
  const [n, m] = lengths.split(' ');
  const neverHeardPeople = strs.slice(0, n);
  const neverSeenPeople = strs.slice(n, n + m);
  
  let [array, set] = [];
  if (n > m) [array, set] = [neverSeenPeople, new Set(neverHeardPeople)];
  else [array, set] = [neverHeardPeople, new Set(neverSeenPeople)];

  const neverHeardAndSeenPeople = array.filter((person) => set.has(person)).sort();
  return [neverHeardAndSeenPeople.length, ...neverHeardAndSeenPeople].join('\n');
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
