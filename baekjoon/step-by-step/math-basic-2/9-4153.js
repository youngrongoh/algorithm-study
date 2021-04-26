/**
 * @see https://www.acmicpc.net/problem/4153
 * @description
 * # Title: 직각삼각형
 * # Condition
 * 각 변들의 길이가 3, 4, 5인 삼각형은 직각 삼각형
 * # Problem
 * 직각 삼각형이 맞다면 "right", 아니라면 "wrong"을 출력
 * # Input
 * 입력은 여러개의 테스트케이스
 * 각 입력은 변의 길이를 의미
 * 30,000보다 작은 양의 정수
 * 마지막줄에는 0 0 0이 입력
 * # Memo
 * c^2 = a^2 + b^2 (c > a, b)
 * c = √(a^2 + b^2)
 * @see
 * @arguments
 * `6 8 10
25 52 60
5 12 13
0 0 0`
 */

function checkRightTriangle(sides) {
  const diagonal = Math.max(...sides);

  const others = sides.filter((side) => side !== diagonal);
  const a = others[0];
  const b = others[1];

  const squareA = Math.pow(a, 2);
  const squareB = Math.pow(b, 2);

  return diagonal === Math.sqrt(squareA + squareB) ? 'right' : 'wrong';
}

const sample = `6 8 10
25 52 60
5 12 13
0 0 0
`;

const input = sample.trim().split('\n');

input.forEach((str) => {
  if (str === '0 0 0') return;

  const sides = str.split(' ').map((side) => Number(side));

  const result = checkRightTriangle(sides);

  console.log(result);
});
