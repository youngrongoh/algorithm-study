/**
 * @see https://www.acmicpc.net/problem/10798
 * @description
 * # Title: 세로읽기
 * ## Condition
 * ## Problem
 * 영석이가 세로로 읽은 순서대로 글자들을 글자들을 공백 없이 연속해서 출력
 * ## Input
 * 총 다섯줄의 입력, 각 줄에는 최소 1개, 최대 15개의 글자들이 빈칸 없이 연속으로 주어짐
 * (영어 대문자 ‘A’부터 ‘Z’, 영어 소문자 ‘a’부터 ‘z’, 숫자 ‘0’부터 ‘9’ 중 하나)
 * ## Memo
 * 
 */

const func = (input) => {
  const rows = input.split('\n');
  const maxLength = rows.reduce((max, row) => max < row.length ? row.length : max, 0);
  let serial = '';
  for (let i = 0; i < maxLength; i++) {
    const part = rows.reduce((acc, row) => row.at(i) == null ? acc : acc + row.at(i), '');
    serial += part;
  }
  return serial;
};

const a = func(`ABCDE
abcde
01234
FGHIJ
fghij`);
console.log(a);

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
