/**
 * @see https://www.acmicpc.net/problem/1935
 * @description
 * # Title: 후위표기식
 * ## Condition
 * 피연산자는 A~Z의 영대문자, A부터 순서대로 N개의 영대문자만이 사용
 * 길이는 100 이하
 * 앞에서부터 계산했을 때, 식의 결과와 중간 결과가 -20억보다 크거나 같고, 20억보다 작거나 같다
 * ## Problem
 * 계산 결과를 소숫점 둘째 자리까지 출력
 * ## Input
 * 첫째 줄에 피연산자의 개수(1 ≤ N ≤ 26)
 * 둘째 줄에는 후위 표기식
 * 셋째 줄부터 N+2번째 줄까지는 각 피연산자에 대응하는 값(100보다 작거나 같은 자연수)
 * ## Memo
 * 사칙연산은 중위표기식(피연산자 사이에 연산자가 들어가는 형태)
 * 후위표기식:
 * 피연산자 뒤로 연산자가 나오는 형태
 * ex) 4+3 => 43+
 * 괄호, 연산의 우선순위를 고려하지 않음
 * 왼쪽부터 읽음
 * 피연산자는 지나치고 연산자가 나오면 연산자 앞 두 개 피연산자로 연산
 */


const func = (input) => {
  const { n, opers, values } = format(input);
  return calulate(opers, values);
};

const calulate = (opers, values) => {
  const stack = [];

  opers.forEach((oper) => {
    if (isOperand(oper)) {
      const converted = convertToValue(oper, values);
      stack.push(converted);
      return;
    }

    const b = stack.pop();
    const a = stack.pop();
    const interim = operate(a, b, oper);

    stack.push(interim);
  });
  
  const result = stack.pop();
  if (stack.length > 0) throw new Error('Operation is not Ended, yet.');
  return result;
}

const format = (input) => {
  const [n, expression, ...values] = input.trim().split('\n');
  return {
    n,
    opers: Array.from(expression),
    values
  }
};

const isOperand = (char) => {
  if (typeof char !== 'string') return false;

  const charCode = char.charCodeAt();
  return CHARCODE_OF_A <= charCode && charCode <= CHARCODE_OF_Z;
}
const CHARCODE_OF_A = 'A'.charCodeAt();
const CHARCODE_OF_Z = 'Z'.charCodeAt();

const operate = (a, b, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      throw new Error('This is not Valid Operator');
  }

  result = Math.floor(result * 100) / 100;

  return result;
}

const convertToValue = (operand, values) => {
  if (typeof operand !== 'string') return;
  const charCode = operand.charCodeAt();
  if (!charCode || charCode < CHARCODE_OF_A) return;
  const index = charCode - CHARCODE_OF_A;
  return parseInt(values[index]);
}


/* 
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim();
  const result = forSubmit(input);
  console.log(result);
*/
const forSubmit = (input) => {
  const CHARCODE_OF_A = 'A'.charCodeAt();
  const CHARCODE_OF_Z = 'Z'.charCodeAt();

  const [ n, expression, ...values ] = input.trim().split('\n');
  const opers = Array.from(expression);
  
  const stack = [];

  opers.forEach((oper) => {
    if (typeof oper !== 'string') throw new Error('This oper is not string');

    const charCode = oper.charCodeAt();
    const isOperand = CHARCODE_OF_A <= charCode && charCode <= CHARCODE_OF_Z;

    if (isOperand) {
      if (charCode >= CHARCODE_OF_A) {
        const index = charCode - CHARCODE_OF_A;
        const converted = parseInt(values[index]);
        stack.push(converted);
      }
      return;
    }

    if (stack.length < 2) throw new Error('Stack length is less than 2');
    const b = stack.pop();
    const a = stack.pop();

    let interim;
    switch (oper) {
      case '+':
        interim = a + b;
        break;
      case '-':
        interim = a - b;
        break;
      case '*':
        interim = a * b;
        break;
      case '/':
        interim = a / b;
        break;
      default:
        throw new Error('This is not Valid Operator');
    }

    interim = Math.floor(interim * 100) / 100;

    stack.push(interim);
  });

  const result = stack.pop();
  if (stack.length > 0) throw new Error('Operation is not Ended, yet.' + stack);

  return result;
}

module.exports = [ func, forSubmit ];
