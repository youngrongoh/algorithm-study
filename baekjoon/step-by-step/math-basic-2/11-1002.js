/**
 * @see https://www.acmicpc.net/problem/1002
 * @description
 * # Title: 터렛
 * # Condition
 * 조규현(x1, y1)이 계산한 류재명과의 거리 r1
 * 백승환(x2, y2)이 계산한 류재명과의 거리 r2
 * 류재명이 있을 수 있는 위치의 개수가 무한대일 경우에는 -1을 출력
 * # Problem
 * 각 테스트 케이스마다 류재명이 있을 수 있는 위치의 수를 출력
 * # Input
 * 첫째 줄에 테스트 케이스의 개수 T
 * 각 테스트 케이스 한 줄에 x1, y1, r1, x2, y2, r2
 * (-10000 <= x1, y1, x2, y2 <= 10000)
 * (r1, r2 <= 10000)
 * # Memo
 * 반지름 r1, r2인 두 원
 * 중심 간의 거리 d
 * 1. r1 + r2 > d
 *    1-1. r2 - r1 < d
 *          두 점
 *    1-2. r2 - r1 > d
            만나지 않음
 *    1-3. r2 - r1 = d
 *          한 점(내접)
 * 2. r1 + r2 < d
 *    2-1. 만나지 않음
 * 3. r1 + r2 = d
 *    한 점(외접)
 * 4. d = 0
 *    동심원
 *    
 * @see https://mathbang.net/101
 * @see https://dpsc615.tistory.com/121
 * @arguments
 * `3
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5`
 */

function countPositions([x1, y1, r1, x2, y2, r2]) {
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const rSum = r1 + r2;
  const rSub = Math.abs(r2 - r1);

  if (rSum > distance) {
    if (rSub > distance) {
      return 0;
    } else if (rSub < distance) {
      return 2;
    } else {
      return distance === 0 ? -1 : 1;
    }
  } else if (rSum < distance) {
    return 0;
  } else {
    return 1;
  }
}

const sample = `3
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5`;

const input = sample.split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  const testCase = input[i].split(' ').map((value) => Number(value));

  const count = countPositions(testCase);

  console.log(count);
}
