/**
 * @see https://programmers.co.kr/learn/courses/30/lessons/42748
 * @description
 * # Title: K번째수
 * # Condition
 * 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수
 * # Problem
 * commands의 모든 원소에 대해 연산을 적용했을 때 나온 결과를 배열에 담아 return
 * # Input
 * 배열 array
 * [i, j, k]를 원소로 가진 2차원 배열 commands
 * # Memo
 * 삽입 정렬
 * - 두 번째 수부터 뽑기 시작
 * - 뽑은 수의 왼쪽에 있는 수들과 하나씩 비교
 * - 작은 수는 왼쪽, 큰 수는 오른쪽에 놓음
 * - 모든 왼쪽에 있는 모든 수들과 비교가 끝나면 다음 수 뽑아 반복
 * - 왼쪽에 있는 수들은 이미 정렬된 수들
 * @see https://www.zerocho.com/category/Algorithm/post/57e39fca76a7850015e6944a
 * @arguments
 * array: [1, 5, 2, 6, 3, 7, 4],
 * commands: [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
 */

function solution(array, commands) {
  const answer = [];

  for (let command of commands) {
    const start = command[0] - 1;
    const end = command[1] - 1;
    const index = command[2] - 1;

    const sliced = array.slice(start, end + 1);

    // 삽입 정렬
    for (let i = 1; i < sliced.length; i++) {
      const temp = sliced[i];

      let j = i - 1;
      for (j; j >= 0; j--) {
        if (temp >= sliced[j]) break;

        sliced[j + 1] = sliced[j];
        sliced[j] = temp;
      }
    }

    answer.push(sliced[index]);
  }

  return answer;
}

const input = {
  array: [1, 5, 2, 6, 3, 7, 4],
  commands: [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ],
};

const result = solution(input.array, input.commands);

console.log(result);
