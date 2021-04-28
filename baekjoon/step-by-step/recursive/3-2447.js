/**
 * @see https://www.acmicpc.net/problem/2447
 * @description
 * # Title: 별 찍기 - 10
 * # Condition
 * N의 패턴은 N×N 정사각형
 * 크기 3의 패턴은 가운데에 공백
 * N이 3보다 클 경우,
 * 크기 N의 패턴은 공백으로 채워진 가운데의 (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태
 * # Problem
 * 첫째 줄부터 N번째 줄까지 별을 출력
 * # Input
 * 첫째 줄에 N(N = 3^k, 1 ≤ k < 8, k는 정수)
 * # Memo
 * 3의 패턴
`***
 * *
 ***`
 * @see
 * @arguments
 * `27`
 */

function findPattern(n) {
  if (n === 3) return '***\n* *\n***';
  const pattern = findPattern(n / 3).split('\n');

  let result = '';

  let blank = '';
  for (let k = 0; k < n / 3; k++) {
    blank += ' ';
  }

  for (let i = 0; i < n; i++) {
    const index = i % (n / 3);
    for (let j = 0; j < 3; j++) {
      if (i >= n / 3 && i < (n * 2) / 3 && j === 1) {
        result += blank;
      } else {
        result += pattern[index];
      }
      if (j === 2 && i < n - 1) result += '\n';
    }
  }

  return result;
}

const sample = ['27', '9', '3', '81'];

sample.forEach((input) => {
  const n = Number(input);

  const result = findPattern(n);

  console.log(result);
});
