/**
 * @see https://www.acmicpc.net/problem/11478
 * @description
 * # Title: 서로 다른 부분 문자열의 개수
 * ## Condition
 * 부분 문자열은 S에서 연속된 일부분, 길이가 1보다 크거나 같음
 * ## Problem
 * 문자열 S가 주어졌을 때, S의 서로 다른 부분 문자열의 개수를 출력
 * ## Input
 * 첫째 줄에 문자열 S
 * ## Memo
 * 
 */

const func = (input) => {
  const strSet = new Set(input);
  Array.from(input).forEach((_, i) => {
    for (let j = i + 1; j <= input.length; j++) {
      strSet.add(input.slice(i, j));
    }
  }, []);
  return strSet.size;
};

console.log(func('ababc'))

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
