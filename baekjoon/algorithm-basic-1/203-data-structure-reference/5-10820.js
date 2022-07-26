/**
 * @see https://www.acmicpc.net/problem/10820
 * @description
 * # Title: 문자열 분석
 * ## Condition
 * 각 문자열은 알파벳 소문자, 대문자, 숫자, 공백으로만 구성
 * ## Problem
 * 각각의 문자열에 대해서 소문자, 대문자, 숫자, 공백의 개수를 공백으로 구분해 출력
 * ## Input
 * 첫째 줄부터 N번째 줄까지 문자열(1 ≤ N ≤ 100, (문자열 길이) < 100)
 * ## Memo
 * 
 */

const func = (input) => {
  const lowercaseRange = getStrRange('a', 'z');
  const uppercaseRange = getStrRange('A', 'Z');
  const numberRange = getStrRange('0', '9');
  const spaceCode = ' '.charCodeAt();

  const result = input.split('\n').map((line) => {
    const result = new Array(4).fill(0);

    for (let char of line) {
      const code = char.charCodeAt();

      if (code === spaceCode) {
        result[3]++;
        continue;
      }

      const ranges = [lowercaseRange, uppercaseRange, numberRange];
      ranges.forEach(([start, end], i) => {
        if (start <= code && code <= end) {
          result[i]++
          return;
        }
      })
    }
    return result.join(' ');
  })

  return result.join('\n');
};

const getStrRange = (start, end) => [start.charCodeAt(), end.charCodeAt()];

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
