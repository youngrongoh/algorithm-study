/**
 * @see https://www.acmicpc.net/problem/11655
 * @description
 * # Title: ROT13
 * ## Condition
 * 알파벳이 아닌 글자는 원래 글자 그대로 남아 있어야 함
 * ## Problem
 * 첫째 줄에 S를 ROT13으로 암호화한 내용을 출력
 * ## Input
 * 첫째 줄에 알파벳 대문자, 소문자, 공백, 숫자로만 이루어진 문자열 S (S.length <= 100)
 * ## Memo
 * ROT13은 카이사르 암호의 일종
 * 영어 알파벳을 13글자씩 밀어서 만듦
 * 알파벳 대문자와 소문자에만 적용
 */

 const func = (str) => {
  const ROT = 13;
  const LOWERCASE_RANGE = ['a'.charCodeAt(), 'z'.charCodeAt()];
  const UPPERCASE_RANGE = ['A'.charCodeAt(), 'Z'.charCodeAt()];

  const isIncludesIn = (range, charCode) => {
    const [start, end] = range;
    return start <= charCode && charCode <= end;
  }

  const isAlphabet = (charCode) => {
    return isIncludesIn(LOWERCASE_RANGE, charCode) || isIncludesIn(UPPERCASE_RANGE, charCode);
  }

  const getRotCode = (charCode) => {
    const rotCode = charCode + ROT;
    const [start, end] = isIncludesIn(LOWERCASE_RANGE, charCode) ? LOWERCASE_RANGE : UPPERCASE_RANGE;
    const diff = rotCode - end;
    return diff > 0 ? start + diff - 1 : rotCode;
  }

  let result = '';
  for (let char of str) {
    const charCode = char.charCodeAt();
    if (!isAlphabet(charCode)) {
      result += char;
      continue;
    }
    const rotCode = getRotCode(charCode);
    result += String.fromCharCode(rotCode);
  }

  return result;
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
