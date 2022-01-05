/**
 * @see https://www.acmicpc.net/problem/10799
 * @description
 * # Title: 쇠막대기
 * # Condition
 * 배치 조건
 * 1. 쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있음
 * 2. 끝점은 겹치지 않음
 * 3. 각 쇠막대기를 자르는 레이저는 적어도 하나 존재
 * 4. 레이저는 쇠막대기의 양 끝점과 겹치지 않음
 * 레이저와 쇠막대기의 배치는 괄호를 이용하여 왼쪽부터 순서대로 표현할 수 있음
 * 레이저는 ‘()’ 으로 표현
 * 막대기의 왼쪽 끝은 여는 괄호 ‘ ( ’ 로, 오른쪽 끝은 닫힌 괄호 ‘) ’ 로 표현
 * # Problem
 * 잘려진 쇠막대기 조각의 총 개수를 출력
 * # Input
 * 쇠막대기와 레이저의 배치를 나타내는 괄호 문자열
 * (괄호 문자의 개수는 최대 100,000, 사이에 공백 없음)
 * # Memo
 * @see
 * @arguments
 * Case 1
 * `()(((()())(())()))(())`
 * Case 2
 * `(((()(()()))(())()))(()())`
 */

function cutStickWithLaser(stickWithLaser) {
  if (typeof stickWithLaser !== 'string') throw new Error('Input have to be string!');

  let stacked = 0;
  let pieces = 0;
  let prevParen = '';

  Array.from(stickWithLaser).forEach((aParen) => {
    if (aParen === '(') {
      stacked += 1;
    } else {
      stacked -= 1;
      if (prevParen === '(') {
        pieces += stacked;
      } else {
        pieces += 1;
      }
    }
    prevParen = aParen;
  });

  return pieces;
}

function cutStickWithLaserWithStack(stickWithLaser) {
  if (typeof stickWithLaser !== 'string') throw new Error('Input have to be string!');

  let pieces = 0;
  let stack = [];

  Array.from(stickWithLaser).forEach((aParen, i) => {
    if (aParen === '(') {
      stack.push(aParen);
    } else {
      stack.pop();

      if (stickWithLaser[i-1] === '(') {
        pieces += stack.length;
      } else {
        pieces += 1;
      }
    }
  });

  return pieces;
}

module.exports = { cutStickWithLaser, cutStickWithLaserWithStack };
