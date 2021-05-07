/**
 * @see https://programmers.co.kr/learn/courses/30/lessons/43165
 * @description
 * # Title: 타겟 넘버
 * # Condition
 * 주어지는 숫자의 개수는 2개 이상 20개 이하
 * 각 숫자는 1 이상 50 이하인 자연수
 * 타겟 넘버는 1 이상 1000 이하인 자연수
 * # Problem
 * 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return
 * # Input
 * 사용할 수 있는 숫자가 담긴 배열 numbers
 * 타겟 넘버 target
 * # Memo
 * @see
 * @arguments
 * ## Case 1
 * numbers: [1, 1, 1, 1, 1]
 * target: 3
 */

/* 2021.5.7 반복문 이용 -> 통과
function solution(numbers, target) {
  const calculated = numbers.reduce((result, n, i) => {
    if (i === 0) {
      result.push(+n, -n);
      return result;
    }

    const newResult = [];
    result.forEach((sum) => newResult.push(sum + n, sum - n));
    return newResult;
  }, []);

  return calculated.filter((sum) => sum === target).length;
}
*/

// 2021.5.7 재귀 이용 -> 통과
function solution(numbers, target) {
  let answer = 0;

  function dfs(sum, i) {
    if (i === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    dfs(sum + numbers[i], i + 1);
    dfs(sum - numbers[i], i + 1);
  }

  dfs(0, 0);

  return answer;
}

const sample = [[[1, 1, 1, 1, 1], 3]];

sample.forEach((input) => {
  const numbers = input.shift();
  const target = input.shift();

  const result = solution(numbers, target);
  console.log(result);
});
