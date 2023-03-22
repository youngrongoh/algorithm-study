/**
 * @see https://www.acmicpc.net/problem/2566
 * @description
 * # Title: 최댓값
 * ## Condition
 * 최댓값이 두 개 이상인 경우 그 중 한 곳의 위치를 출력
 * ## Problem
 * 첫째 줄에 최댓값을 출력
 * 둘째 줄에 최댓값이 위치한 행 번호와 열 번호를 빈칸을 사이에 두고 차례로 출력
 * ## Input
 * 첫째 줄부터 아홉 번째 줄까지 한 줄에 아홉 개씩 숫자 N(0 <= N < 100)
 * ## Memo
 */

const func = (input) => {
  const rows = input.split('\n').map((row) => row.split(' '));
  const [r, c] = rows.reduce(([r, c], row, i) => {
    const j = row.reduce((c, value, j) => +value > +row[c] ? j : c, 0);
    return +row[j] > +rows[r][c] ? [i, j] : [r, c];
  }, [0, 0]);
  return `${rows[r][c]}\n${r+1} ${c+1}`;
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
