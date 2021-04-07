/**
  * @see https://www.acmicpc.net/problem/2775
  * @description
  * # Title: 부녀회장이 될테야
  * # Condition
  * 1. a층의 b호에 살려면, a-1층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다
  * 2. 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정
  * 3. 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다
  * # Problem
  * k층에 n호에는 몇 명이 살고 있는지 출력(1 ≤ k, n ≤ 14, k와 n은 정수)
  * # Input
  * 첫 번째 줄에 Test case의 수 T
  * 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n
  * # Memo
  * 3층  1  5  15 35  70 
  * 2층  1  4  10 20  35
  * 1층  1  3  6  10  15 -> (k-1,n) + (k,n-1)
  * 0층  1  2  3  4   5 -> n
  *    1호 2호 3호 4호 5호
  * (1,3) -> 3+3
  * (1,4) -> 6+4
  * (2,5) -> 20+15
  * a => k-1[n]
  * b => k[n-1]
  * @arguments
  * `2
    1
    3
    2
    3`
*/

function solve(k, n) {
  const apartment = [];
  for (let i = 0; i <= k; i++) {
    const floor = [];
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        floor.push(j + 1);
        continue;
      }
      if (j === 0) {
        floor.push(1);
        continue;
      }
      const previousFloor = apartment[i - 1];
      floor.push(floor[j - 1] + previousFloor[j]);
    }
    apartment.push(floor);
  }
  return apartment[k][n - 1];
}

const str = `3
1
3
2
3
1
14`;

const input = str.split('\n');
const count = +input[0];
for (let i = 1; i <= count * 2; i += 2) {
  const k = +input[i];
  const n = +input[i + 1];
  console.log(k, n);
  const result = solve(k, n);
  console.log(result);
}
