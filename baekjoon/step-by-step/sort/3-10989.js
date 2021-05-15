/**
 * @see https://www.acmicpc.net/problem/10989
 * @description
 * # Title: 수 정렬하기3
 * # Condition
 * # Problem
 * 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력
 * # Input
 * 첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)
 * 둘째 줄부터 N개의 줄에는 숫자(10,000보다 작거나 같은 자연수)
 * # Memo
 *
 * @see
 * @arguments
 * `10
5
2
3
1
4
2
3
5
1
7`
 */

/* 2021.5.13 실패, 메모리 초과
function sortAsc(nums) {
  const sorted = nums.sort((a, b) => a - b);

  return sorted.join('\n');
}
 */
/* 2021.5.15 메모리 초과
const sample = [
  `10
5
2
3
1
4
2
3
5
1
7`,
];

sample.forEach((string) => {
  const input = string.split('\n');

  let sorted = [];

  for (let i = 1; i <= +input[0]; i++) {
    if (sorted.length < 1) {
      sorted[0] = +input[i];
      continue;
    }

    for (let j = 0; j < sorted.length; j++) {
      if (+input[i] >= sorted[j]) {
        // sorted의 모든 수보다 크면 sorted 마지막에 추가
        if (j === sorted.length - 1) {
          sorted[sorted.length] = +input[i];
          break;
        }

        // sorted의 가장 큰 수가 아니면서, j번째 수 이상이면 다음 수와 비교
        continue;
      }

      // sorted의 j번째 수보다 작거나 같으면 j번째에 추가하고 이후 수들은 하나씩 뒤로 밀어냄
      let temp = +input[i];
      for (let k = j; k <= sorted.length; k++) {
        if (k === sorted.length) {
          sorted[k] = temp;
          break;
        }
        temp = temp + sorted[k];
        sorted[k] = temp - sorted[k];
        temp = temp - sorted[k];
      }

      break;
    }
  }

  sorted = sorted.join('\n');
  console.log(sorted);
});
 */
