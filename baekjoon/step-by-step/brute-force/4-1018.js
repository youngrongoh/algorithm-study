// fs를 쓰면 런타임 에러 생기는 문제
/**
 * @see https://www.acmicpc.net/problem/1018
 * @description
 * # Title: 체스판 다시 칠하기
 * # Condition
 * 정사각형으로 나누어져 있는 M*N 크기의 보드
 * 어떤 정사각형은 검은색, 나머지는 흰색
 * 보드를 잘라서 8*8 크기의 체스판으로 만듦
 * 체스판은 검은색과 흰색이 번갈아서 칠해져 있어야 함
 * 각 칸은 검은색 or 흰색
 * 변을 공유하는 두 개의 사각형은 다른 색
 * 체스판을 색칠하는 경우는 두 가지
 * 맨 왼쪽 위 칸이 흰색인 경우, 검은색인 경우
 * 보드가 체스판처럼 칠해져 있다는 보장이 없음
 * 8*8 크기의 체스판으로 잘라낸 후에 몇 개의 정사각형을 다시 칠
 * 8*8 크기는 아무데서나 골라도 됨
 * # Problem
 * 첫째 줄에 다시 칠해야 하는 정사각형 개수의 최솟값을 출력
 * # Input
 * 첫째 줄에 N과 M (8 <= N, M <= 50, 자연수)
 * 둘째 줄부터 N개의 줄에는 보드의 각 행의 상태 (B는 검은색이며, W는 흰색)
 * # Memo
 * 
 * @see
 * @arguments
 * `8 8
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW`,
`10 13
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
WWWWWWWWWWBWB
WWWWWWWWWWBWB
`
 */

/* 2021.5.12 실패
function calcLowestCount(m, n, board) {
  const lines = board.map((line, j) => {
    let count = 0;
    const front = [];
    const counts = [];

    for (let i = 0; i < line.length; i++) {
      const conditions = [
        line[i - 1] !== line[i],
        line[i - 1] !== board[j-1][i] === ,
        line[i - 1] === 'B' && line[i] === 'W',
      ];

      if (i > 0 && conditions.some((condition) => condition)) count++;

      // 앞 부분에서 W, B 교차가 연속된 횟수 저장
      if (i <= line.length - 8) front.push(count);

      // 8칸 범위 내에서 W, B의 연속된 횟수 계산 및 저장
      if (i >= 7) counts.push(count - front[i - 7]);
    }

    return counts;
  });

  const sums = lines.reduce((sums, row) => {
    row.forEach((count, i) => {
      sums[i] += count;
    });
    return sums;
  }, Array(lines.length).fill(0));

  const max = Math.max(...sums);

  return 56 - max;
}
 */
'use strict';

const wChess = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];

const bChess = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

function compareOfChess(chess, compared) {
  let count = 0;

  compared.forEach((line, i) => {
    [...line].forEach((square, j) => {
      if (square !== chess[i][j]) count++;
    });
  });

  return count;
}

function calcLowestCount(m, n, board) {
  let min = 64;

  // 8개 묶음씩 행 순회
  for (let i = 0; i <= m - 8; i++) {
    const sliced = board.slice(i, i + 8);
    // 8개 묶음씩 열 순회
    for (let j = 0; j <= n - 8; j++) {
      const part = sliced.map((line) => line.slice(j, j + 8));

      const wCount = compareOfChess(wChess, part); // 'W'로 시작할 때와 비교
      const bCount = compareOfChess(bChess, part); // 'B'로 시작할 때와 비교

      const tempMin = wCount < bCount ? wCount : bCount;

      if (min > tempMin) min = tempMin;
    }
  }

  return min;
}

const sample = [
  `8 8
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW`,
  `10 13
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
WWWWWWWWWWBWB
WWWWWWWWWWBWB`,
];

sample.forEach((input) => {
  const [mn, ...board] = input.split('\n');
  const [m, n] = mn.split(' ');

  const paintingCount = calcLowestCount(m, n, board);

  console.log(paintingCount);
});
