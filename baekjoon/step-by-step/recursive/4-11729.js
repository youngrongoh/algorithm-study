/**
 * @see https://www.acmicpc.net/problem/11729
 * @description
 * # Title: 하노이 탑 이동 순서
 * # Condition
 * 1. 한 번에 한 개의 원판만을 다른 탑으로 옮길 수 있음
 * 2. 쌓아 놓은 원판은 항상 위의 것이 아래의 것보다 작아야 함
 * # Problem
 * 첫째 줄에 옮긴 횟수 K를 출력
 * 두 번째 줄부터 수행 과정을 출력
 * K개의 줄에 걸쳐 두 정수 A B를 빈칸을 사이에 두고 출력
 * (A번째 탑의 가장 위에 있는 원판을 B번째 탑의 가장 위로 옮긴다는 뜻)
 * # Input
 * 첫째 줄에 첫 번째 장대에 쌓인 원판의 개수 N (1 ≤ N ≤ 20)
 * # Memo
 * @see https://dip0cean.tistory.com/14
 * @arguments
 * `3`
 */

function getHanoiOrder(n) {
  const order = [];

  (function move(n, from = 1, to = 3) {
    if (n > 1) move(n - 1, from, 6 - from - to);

    order.push(`${from} ${to}`);

    if (n > 1) move(n - 1, 6 - from - to, to);
  })(n);

  return order;
}

const order = getHanoiOrder(3);

console.log(`${order.length}\n${order.join('\n')}`);
