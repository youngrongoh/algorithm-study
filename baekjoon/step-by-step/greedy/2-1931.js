/**
 * @see https://www.acmicpc.net/problem/1931
 * @description
 * # Title: 회의실 배정
 * ## Condition
 * ## Problem
 * 첫째 줄에 최대 사용할 수 있는 회의의 최대 개수를 출력
 * ## Input
 * 첫째 줄에 회의의 수 N(1 ≤ N ≤ 100,000)
 * 둘째 줄부터 N+1 줄까지 각 회의의 정보
 * 공백을 사이에 두고 회의의 시작시간과 끝나는 시간
 * (시작 시간과 끝나는 시간은 2^31-1보다 작거나 같은 자연수 또는 0)
 * ## Memo
 * 
 */

const func = (input) => {
  const [n, ...timeTable] = input.split('\n').map((line, i) => i > 0 ? line.split(' ').map((n) => Number(n)) : line);
  const sortedTable = timeTable.sort((a, b) => {
    const endSort = a[1] - b[1];
    return endSort !== 0 ? endSort : a[0] - b[0];
  });
  
  const meetings = sortedTable.slice(0, 1);
  for (let meeting of sortedTable.slice(1)) {
    if (meeting[0] >= meetings.at(-1)[1]) {
      meetings.push(meeting);
    }
  }

  return meetings.length;
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
