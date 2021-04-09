/**
  @Title ACM 호텔
  @Link https://www.acmicpc.net/problem/10250
  @Env Node.js
  @Condition
  1. H × W 형태(1 ≤ H, W ≤ 99)
  2. 정문에서 엘리베이터까지의 거리는 무시
  3. 모든 인접한 두 방 사이의 거리 같음
  4. 호텔의 정면 쪽에만 방이 있다 -> 평면
  5. 방 번호는 YXX 나 YYXX 형태(Y는 층 수, X는 엘리베이터에서부터 세었을 때의 번호) -> 호수는 한 자리일 때 앞에 0붙여야 함
  6. 엘리베이터를 타고 이동하는 거리는 신경 쓰지 않는다 -> 호수가 낮은 방부터 배정
  7. 걷는 거리가 같을 때에는 아래층의 방을 더 선호
  8. 초기에 모든 방이 비어있다고 가정
  @Problem
  N 번째로 도착한 손님에게 배정될 방 번호를 계산하고 출력
  @Input
  * 입력은 T 개의 테스트 데이터로 구성
  * T 는 입력의 맨 첫 줄
  * 각 테스트 데이터는 한 행으로서 H(호텔의 층 수), W(각 층의 방 수), N(몇 번째 손님) 세 정수를 포함(1 ≤ H, W ≤ 99, 1 ≤ N ≤ H × W)
  @TestData
  `2
  6 12 10
  30 50 72`
  @memo
  x = Math.floor(n/h) + 1
  y = n%h
*/

function solve(h, n) {
  const value = Math.floor(n / h);
  const remain = n % h;
  const x = remain > 0 ? value + 1 : value;
  const y = remain > 0 ? remain : h;
  return `${y}${x < 10 ? `0${x}` : x}`;
}

const testData = `3
6 12 10
30 50 72
6 12 6`;
const input = testData.split('\n');
const t = +input[0];
for (let i = 1; i <= t; i++) {
  const dataArr = input[i].split(' ');
  const h = +dataArr[0];
  const n = +dataArr[2];
  const result = solve(h, n);
  console.log(result);
}
