/**
 * @see https://www.acmicpc.net/problem/11656
 * @description
 * # Title: 접미사 배열
 * ## Condition
 * ## Problem
 * 첫째 줄부터 S의 접미사를 사전순으로 한 줄에 하나씩 출력
 * ## Input
 * 첫째 줄에 알파벳 소문자로만 이루어진 문자열 S(S.length <= 1000)
 * ## Memo
 * 접미사 배열은 문자열 S의 모든 접미사를 사전순으로 정렬해 놓은 배열
 */

 const func = (input) => {
  let suffixes = [];

  for (let i = 0; i < input.length; i++) {
    suffixes.push(input.slice(i, input.length));
  }

  const sorted = suffixes.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      const diff = a[i].charCodeAt() - b[i].charCodeAt();
      if (diff === 0) continue;
      return diff;
    }
    return a.length - b.length;
  });

  return sorted.join('\n');
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
