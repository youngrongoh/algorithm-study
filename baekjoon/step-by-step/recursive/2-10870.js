/**
 * @see https://www.acmicpc.net/problem/10870
 * @description
 * # Title: 피보나치 수 5
 * # Condition
 * 피보나치 수는 0과 1로 시작
 * 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1
 * 2번째 부터는 바로 앞 두 피보나치 수의 합
 * Fn = Fn-1 + Fn-2 (n ≥ 2)
 * # Problem
 * 첫째 줄에 n번째 피보나치 수를 출력
 * # Input
 * 첫째 줄에 정수 n (0 <= n <= 20)
 * # Memo
 * 재귀는 계속해서 실행 컨텍스트가 만들어지므로 메모리 문제가 생길 수 있음
 * 반복해서 쓰이는 호출은 저장하여 최적화 할 수 있음
 * @see
 * @arguments
 * `10`
 */

function fib(n) {
  const cache = [0, 1];

  const calcFib = (n) => {
    if (cache[n] !== undefined) return cache[n];

    const fibNum = calcFib(n - 1) + calcFib(n - 2);

    cache.push(fibNum);

    return fibNum;
  };

  return calcFib(n);
}

const sample = [`10`, `17`];

sample.forEach((input) => {
  const n = Number(input);

  const fibNum = fib(n);

  console.log(fibNum);
});
