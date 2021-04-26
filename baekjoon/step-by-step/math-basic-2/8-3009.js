/**
 * @see https://www.acmicpc.net/problem/3009
 * @description
 * # Title: 네 번째 점
 * # Condition
 * 축에 평행한 직사각형
 * # Problem
 * 세 점이 주어졌을 때, 네 번째 점의 좌표?
 * # Input
 * 세 점의 좌표가 한 줄에 하나씩
 * 1<= x, y <= 1000
 * x, y는 정수
 * # Memo
 * 중복 되지 않은 (x, y)
 * @see
 * @arguments
 * `30 20
10 10
10 20`
 */

function findLastPoint(points) {
  let x = [];
  let y = [];
  points.forEach((point) => {
    const xIndex = x.findIndex((x) => x === point[0]);
    const yIndex = y.findIndex((y) => y === point[1]);

    if (xIndex === -1) {
      x.push(point[0]);
    } else {
      x.splice(xIndex, 1);
    }

    if (yIndex === -1) {
      y.push(point[1]);
    } else {
      y.splice(yIndex, 1);
    }
  });

  return `${x[0]} ${y[0]}`;
}

const sample = `4 4
2 4
4 2`;

const input = sample.split('\n');

const points = input.map((str) => str.split(' ').map((value) => Number(value)));

const lastPoint = findLastPoint(points);

console.log(lastPoint);
