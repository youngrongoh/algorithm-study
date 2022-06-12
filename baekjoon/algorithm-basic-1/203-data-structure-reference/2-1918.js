/**
 * @see https://www.acmicpc.net/problem/1935
 * @description
 * # Title: 후위표기식
 * ## Condition
 * 피연산자는 알파벳 대문자로 이루어지며 수식에서 한 번씩만 등장
 * -A+B와 같이 -가 가장 앞에 오거나 AB와 같이 *가 생략되는 등의 수식은 주어지지 않음
 * 알파벳 대문자와 +, -, *, /, (, )로만 이루어져 있음
 * 길이는 100을 넘지 않음
 * ## Problem
 * ## Input
 * 첫째 줄에 중위 표기식
 * ## Memo
 * 중위 표기식을 연산자의 우선순위에 따라 괄호로 묶음
 * 괄호 안의 연산자를 괄호의 오른쪽으로 옮김
 * 
 * a+b*c
 * (a+(b*c))
 * (a+bc*)
 * abc*+
 */

const func = (input) => {
  let notation = input;
  const stack = [];

  let open = notation.indexOf('(');
  let close = notation.indexOf(')', open);
  while (open > -1) {
    let nextOpen = notation.indexOf('(', open + 1);
    while (nextOpen > -1 && nextOpen < close) {
      nextOpen = notation.indexOf('(', nextOpen + 1);
      close = notation.indexOf(')', close + 1);
    }

    const inner = notation.slice(open, close + 1);  
    const postfix = func(inner.slice(1, -1));
    stack.push(postfix);
    notation = notation.replace(inner, stack.length - 1);

    open = notation.indexOf('(');
    close = notation.indexOf(')', open);
  }

  [['*', '/'], ['+', '-']].forEach(([oper1, oper2]) => {
    let oper1Index = notation.indexOf(oper1);
    let oper2Index = notation.indexOf(oper2);
    while (oper1Index > -1 || oper2Index > -1) {
      if (oper1Index < 0) oper1Index = 999;
      if (oper2Index < 0) oper2Index = 999;

      const operIndex = oper1Index < oper2Index ? oper1Index : oper2Index;
      const inner = notation.slice(operIndex-1, operIndex+2);
      const postfix = inner[0] + inner[2] + inner[1];
      stack.push(postfix);
      notation = notation.replace(inner, stack.length - 1);

      oper1Index = notation.indexOf(oper1);
      oper2Index = notation.indexOf(oper2);
    }
  })
  
  while (stack.length) {
    const postfix = stack.pop();
    notation = notation.replace(stack.length, postfix);
  }

  return notation;
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
