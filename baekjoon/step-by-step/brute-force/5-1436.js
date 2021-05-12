/**
 * @see https://www.acmicpc.net/problem/1436
 * @description
 * # Title: 영화감독 숌
 * # Condition
 * 종말의 숫자란 어떤 수에 6이 적어도 3개이상 연속으로 들어가는 수
 * N번째 영화의 제목은 세상의 종말 (N번째로 작은 종말의 숫자)
 * # Problem
 * N번째 영화의 제목에 들어간 숫자를 출력
 * # Input
 * 첫째 줄에 숫자 N (N <= 10000, 자연수)
 * # Memo
 *
 * @see
 * @arguments
 * `2`
 */

// 2021.5.12 통과
function findNumOfEnd(n) {
  let number;

  let count = 0;
  for (let i = 666; count < n; i++) {
    if (String(i).includes('666')) {
      count++;
      number = i;
    }
  }

  return number;
}

const sample = ['2', '1', '3', '10000'];

sample.forEach((input) => {
  const n = Number(input);

  const numberOfEnd = findNumOfEnd(n);

  console.log(numberOfEnd);
});
