/**
 * @see https://www.acmicpc.net/problem/11047
 * @description
 * # Title: 동전 0
 * ## Condition
 * ## Problem
 * 첫째 줄에 K원을 만드는데 필요한 동전 개수의 최솟값을 출력
 * ## Input
 * 첫째 줄에 N과 K(1 ≤ N ≤ 10, 1 ≤ K ≤ 100,000,000)
 * 둘째 줄부터 N개의 줄에 동전의 가치 Ai가 오름차순  (1 ≤ Ai ≤ 1,000,000, A1 = 1, i ≥ 2인 경우에 Ai는 Ai-1의 배수)
 * ## Memo
 * 
 */

const func = (input) => {
  const [firstLine, ...coins] = input.split('\n')
  const [n, k] = firstLine.split(' ');
  let remain = k;
  return coins.reverse().reduce((totalCount, coin) => {
    const coinCount = Math.floor(remain / coin);
    remain -= coin * coinCount;
    return totalCount + coinCount;
  }, 0);
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
