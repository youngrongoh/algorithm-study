/**
 * @see https://www.acmicpc.net/problem/10808
 * @description
 * # Title: 알파벳 찾기
 * ## Condition
 * 단어의 첫 번째 글자는 0번째 위치
 * 두 번째 글자는 1번째 위치
 * ## Problem
 * 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력
 * ## Input
 * 첫째 줄에 알파벳 소문자로만 이루어진 단어 S
 * (S의 길이) < 100
 * ## Memo
 * 
 */

 const func = (input) => {
  const result = new Array(26).fill(-1);
  const charCodeOfA = 'a'.charCodeAt();
  for (let i = 0; i < input.length; i++) {
    const alphabetIndex = input[i].charCodeAt() - charCodeOfA;
    if (result[alphabetIndex] === -1) {
      result[alphabetIndex] = i;
    }
  }
  return result.join(' ');
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
