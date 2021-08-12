/**
 * @see https://www.acmicpc.net/problem/17413
 * @description
 * # Title: 단어 뒤집기 2
 * # Condition
 * 문자열 S의 규칙
 * 1. 알파벳 소문자('a'-'z'), 숫자('0'-'9'), 공백(' '), 특수 문자('<', '>')로만 이루어져 있음
 * 2. 문자열의 시작과 끝은 공백이 아님
 * 3. '<'와 '>'가 문자열에 있는 경우 번갈아가면서 등장하며, '<'이 먼저 등장(두 문자의 개수는 같음)
 * 태그는 '<'로 시작해서 '>'로 끝나는 길이가 3 이상인 부분 문자열
 * '<'와 '>' 사이에는 알파벳 소문자와 공백만 있음
 * 단어는 알파벳 소문자와 숫자로 이루어진 부분 문자열
 * 연속하는 두 단어는 공백 하나로 구분
 * 태그는 단어가 아니며, 태그와 단어 사이에는 공백이 없음
 * # Problem
 * 첫째 줄에 문자열 S의 단어를 뒤집어서 출력
 * # Input
 * 첫째 줄에 문자열 S
 * (S의 길이는 100,000 이하)
 * # Memo
 * @see
 * @arguments
 * Case 1
 * `baekjoon online judge`
 * Case 2
 * `<open>tag<close>`
 * Case 3
 * `<ab cd>ef gh<ij kl>`
 * Case 4
 * `one1 two2 three3 4fourr 5five 6six`
 * Case 5
 * `<int><max>2147483647<long long><max>9223372036854775807`
 * Case 6
 * `<problem>17413<is hardest>problem ever<end>`
 * Case 7
 * `<   space   >space space space<    spa   c e>`
 */

function reverseContents(str) {
  let result = '';
  const stack = [];

  let isTag = false;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (i === str.length - 1) {
      stack.push(char);
      while (stack.length > 0) {
        result += stack.pop();
      }
      break;
    }

    if (char === '<' || char === ' ') {
      while (stack.length > 0) {
        result += stack.pop();
      }
    }

    if (char === '<') {
      isTag = true;
    }

    if (isTag || char === ' ') {
      result += char;
    } else {
      stack.push(char);
    }

    if (char === '>') {
      isTag = false;
    }
  }
  return result;
}

const sample = [
  `baekjoon online judge`,
  `<open>tag<close>`,
  `<ab cd>ef gh<ij kl>`,
  `one1 two2 three3 4fourr 5five 6six`,
  `<int><max>2147483647<long long><max>9223372036854775807`,
  `<problem>17413<is hardest>problem ever<end>`,
  `<   space   >space space space<    spa   c e>`,
];

sample.forEach((input) => {
  const result = reverseContents(input);
  console.log(result);
});
