/**
 * @see https://www.acmicpc.net/problem/10808
 * @description
 * # Title: 알파벳 개수
 * ## Condition
 * 알파벳 소문자로만 이루어진 단어 S
 * (S의 길이) < 100
 * 단어에 포함되어 있는 a의 개수, b의 개수, …, z의 개수를 공백으로 구분해서 출력
 * 시간 제한: 1초
 * 메모리 제한: 256 MB
 * ## Problem
 * 각 알파벳이 단어에 몇 개가 포함되어 있는가?
 * ## Input
 * 첫째 줄에 단어 S
 * ## Memo
 * 
 */

const func = (input) => {
  const result = new Array(26).fill(0);
  const charCodeOfA = 'a'.charCodeAt();
  for (let char of input) {
    const index = char.charCodeAt() - charCodeOfA;
    result[index]++;
  }
  return result.join(' ');
};

/* 
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim();
  const result = solve(input);
  console.log(result);
*/
// const forSubmit = (input) => {
  
// }

module.exports = [ func ];
