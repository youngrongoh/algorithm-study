/**
 * @see https://www.acmicpc.net/problem/9012
 * @description
 * # Title: 괄호
 * # Condition
 * x 가 VPS 라면 이것을 하나의 괄호에 넣은 새로운 문자열 “(x)”도 VPS
 * 두 VPS x 와 y를 접합(concatenation)시킨 새로운 문자열 xy도 VPS
 * # Problem
 * 입력 괄호 문자열이 올바른 괄호 문자열(VPS)이면 “YES”, 아니면 “NO”를 한 줄에 하나씩 차례대로 출력
 * # Input
 * 첫 번째 줄에는 입력 데이터의 수를 나타내는 정수 T
 * 각 테스트 데이터의 첫째 줄에는 괄호 문자열
 * 하나의 괄호 문자열의 길이는 2 이상 50 이하
 * # Memo
 * 괄호 문자열(Parenthesis String, PS): 두 개의 괄호 기호인 ‘(’ 와 ‘)’ 만으로 구성되어 있는 문자열
 * 올바른 괄호 문자열(Valid PS, VPS): 괄호의 모양이 바르게 구성된 문자열
 * 기본 VPS: 한 쌍의 괄호 기호로 된 “( )” 문자열
 * @see
 * @arguments
 * `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`
 */

function isVPS(str) {
  const strArr = [...str];

  const stack = [];

  for (let paren of strArr) {
    if (paren === '(') {
      stack.push(false);
    } else {
      const removed = stack.pop();
      if (removed === undefined) return 'NO';
    }
  }

  return stack.length > 0 ? 'NO' : 'YES';
}

const sample = [
  `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`,
];

sample.forEach((input) => {
  const [, ...strs] = input.split('\n');

  let result = '';
  strs.forEach((str) => {
    result += isVPS(str) + '\n';
  });

  console.log(result);

  process.exit();
});
