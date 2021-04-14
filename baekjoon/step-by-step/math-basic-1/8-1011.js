/**
 * @see https://www.acmicpc.net/problem/2839
 * @description
 * # Title: Fly me to the Alpha Centauri
 * # Condition
 * 1. 이전 작동시기에 k광년을 이동하였을 때는 k-1, k 혹은 k+1 광년만을 다시 이동 가능
 * 2. 음수 혹은 0 거리만큼의 이동은 의미가 없음
 * 3. x지점에서 y지점을 향해 최소한의 작동 횟수로 이동
 * 4. y지점에 도착하기 바로 직전의 이동거리는 반드시 1광년
 * # Problem
 * x지점부터 정확히 y지점으로 이동
 * 공간 이동 장치 작동 횟수의 최솟값을 구하는 프로그램을 작성
 * # Input
 * 첫 줄에는 테스트케이스의 개수 T
 * 현재 위치 x, 목표 위치 y (x, y는 정수, 0 ≤ x < y < 2^31)
 * # Memo
 * M = Max
 * 1 2 3 ... M ... 3 2 1
 * 1+2+3+...+M+...+3+2+1
 * = 2 * (1+2+3+...M-1) + M 
 * = 2 * (2/M-1 * M) + M
 * = (M - 1) * M + M
 * = M^2
 * = distance
 * M = Math.sqrt(distance)
 * count = 2 * (M - 1) + 1
 * @see https://docs.google.com/spreadsheets/d/18w-ZfKhbti21zjIvOlKjfTAuJnlcQf08BwumwF-mAVc
 * @arguments
 * `3
    0 3
    1 5
    45 50`
 */

function calcCount(distance) {
  const max = Math.sqrt(distance);

  if (max <= Math.round(max)) {
    return 2 * (Math.round(max) - 1) + 1;
  } else {
    return 2 * Math.round(max);
  }
}

const inputStr = `5
0 3
1 5
45 50
0 1
0 2`;

const input = inputStr.split('\n');
const caseCount = Number(input[0]);
for (let i = 1; i <= caseCount; i++) {
  const testCase = input[i].split(' ');
  const x = Number(testCase[0]);
  const y = Number(testCase[1]);
  const distance = y - x;

  const count = calcCount(distance);
  console.log(count);
}
