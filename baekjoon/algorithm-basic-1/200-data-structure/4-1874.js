/**
 * @see https://www.acmicpc.net/problem/1874
 * @description
 * # Title: 스택 수열
 * # Condition
 * 스택 (stack)은 기본적인 자료구조 중 하나로, 컴퓨터 프로그램을 작성할 때 자주 이용되는 개념
 * 제일 나중에 들어간 자료가 제일 먼저 나오는 (LIFO, Last in First out) 특성
 * 1부터 n까지의 수를 스택에 넣었다가 뽑아 늘어놓음으로써, 하나의 수열을 만들 수 있음
 * 스택에 push하는 순서는 반드시 오름차순
 * # Problem
 * 입력된 수열을 만들기 위해 필요한 연산을 한 줄에 한 개씩 출력
 * push연산은 +로, pop 연산은 -로 표현
 * 불가능한 경우 NO를 출력
 * # Input
 * 첫 줄에 n (1 ≤ n ≤ 100,000)
 * 둘째 줄부터 n개의 줄에는 수열을 이루는 1이상 n이하의 정수가 하나씩 순서대로 주어짐
 * (같은 정수가 두 번 나오는 일은 없음)
 * # Memo
 * @see
 * @arguments
 * Case 1
 * `8
4
3
6
8
7
5
2
1`
 * Case 2
 *`5
1
2
5
3
4`
 */

function analizeOperation(n, nums) {
  const stack = [];
  let result = '';

  let pointer = 0;
  
  // 1부터 n까지 스택에 넣고 빼면서 nums와 결과가 일치하는지 확인
  for (let i = 1; i <= n; i++) {
    stack.push(i);
    result += '+\n';

    while (stack.length > 0 && Number(nums[pointer]) === stack[stack.length - 1]) {
      pointer += 1;
      stack.pop();
      result += '-\n';
    }
  }

  return stack.length > 0 ? 'NO' : result;
}

const sample = [
  `8
4
3
6
8
7
5
2
1`,
`5
1
2
5
3
4`,
];

sample.forEach((input) => {
  const [n, ...nums] = input.split('\n');

  const result = analizeOperation(n, nums);

  console.log(result);
});
