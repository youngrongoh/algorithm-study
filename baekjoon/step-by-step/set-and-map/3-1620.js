/**
 * @see https://www.acmicpc.net/problem/1620
 * @description
 * # Title: 나는야 포켓몬 마스터 이다솜
 * ## Condition
 * 문제가 알파벳으로 들어오면 포켓몬 번호를, 숫자로 들어오면 포켓몬 이름을 출력
 * ## Problem
 * 첫째 줄부터 차례대로 M개의 줄에 각각의 문제에 대한 답을 출력
 * ## Input
 * 첫째 줄에는 도감에 수록되어 있는 포켓몬의 개수 N, 맞춰야 하는 문제의 개수 M(1 <= N, M <= 100,000)
 * 둘째 줄부터 N개의 줄에 포켓몬 이름
 * 다음 M개의 줄에는 맞춰야하는 문제
 * ## Memo
 * 
 */

const func = (input) => {
  const [lengths, ...strs] = input.split('\n');
  const [n, m] = lengths.split(' ');
  const pokemonEnum = strs.slice(0, n).reduce((acc, name, i) => {
    acc[i + 1] = name.trim();
    acc[name.trim()] = i + 1;
    return acc;
  }, {});
  const list = strs.slice(n, n + m);
  return list.map((item) => pokemonEnum[item.trim()]).join('\n');
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
