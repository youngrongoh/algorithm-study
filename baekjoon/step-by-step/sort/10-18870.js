/**
 * @see https://www.acmicpc.net/problem/18870
 * @description
 * # Title: 좌표 압축
 * # Condition
 * 수직선 위에 N개의 좌표 X1, X2, ..., XN
 * 좌표에 좌표 압축을 적용
 * Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표의 개수와 같아야 함
 * # Problem
 * X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 공백 한 칸으로 구분해서 출력
 * # Input
 * 첫째 줄에 N (1 ≤ N ≤ 1,000,000)
 * 둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN
 * (-109 ≤ Xi ≤ 109)
 * # Memo
 *
 * @see
 * @arguments
 * Case1
 * `5
2 4 -10 4 -9`
 * Case2
 * `6
1000 999 1000 999 1000 999`
 */

// 2021.5.15 - fs 모듈로 입력 받으면 통과, readline으로 받으면 시간초과 나옴
function compressCoords(coords) {
  // 중복값 없이 오름차순 정렬
  const sorted = Array.from(new Set(coords)).sort((a, b) => a - b);

  // 좌표마다 압축값 산출
  const compressedObj = sorted.reduce((obj, coord, i) => {
    obj[coord] = i;
    return obj;
  }, {});

  // 압축값을 입력 받은 좌표 배열에 매핑하여 반환
  return coords.map((coord) => compressedObj[coord]);
}

const sample = [
  `5
2 4 -10 4 -9`,
  `6
1000 999 1000 999 1000 999`,
  `9
1 0 10 -15 -5 -10 5 -1 2`,
];

sample.forEach((input) => {
  const [, coords] = input.split('\n');

  const compressed = compressCoords(coords.split(' '));

  console.log(compressed.join(' '));
});
