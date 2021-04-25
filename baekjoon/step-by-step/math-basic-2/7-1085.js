/**
 * @see https://www.acmicpc.net/problem/1085
 * @description
 * # Title: 직사각형에서 탈출
 * # Condition
 * 현재 위치 (x, y)
 * 직사각형의 왼쪽 아래 꼭짓점은 (0, 0)
 * 오른쪽 위 꼭짓점은 (w, h)
 * 첫째 줄에 문제의 정답을 출력
 * # Problem
 * (x, y)에서 직사각형의 경계선까지 가는 거리의 최솟값?
 * # Input
 * 첫째 줄에 정수 x, y, w, h
 * 1 ≤ w, h ≤ 1,000
 * 1 ≤ x ≤ w-1
 * 1 ≤ y ≤ h-1
 * # Memo
 * 최단거리 => 가장 가까운 변으로 가는 거리 (x or y로만 이동하는 거리)
 * Math.min(w - x, h - y, x, y)
 * @see
 * @arguments
 * `6 2 10 3`
 */

function findShortestDistance(x, y, w, h) {
  return Math.min(w - x, x, h - y, y);
}

const sample = `6 2 10 3`;

const input = sample.split(' ').map((value) => Number(value));

const distance = findShortestDistance(...input);

console.log(distance);
