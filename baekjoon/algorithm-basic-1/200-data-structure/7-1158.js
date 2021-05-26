/**
 * @see https://www.acmicpc.net/problem/1158
 * @description
 * # Title: 요세푸스 문제
 * # Condition
 * 1번부터 N번까지 N명의 사람이 원을 이룸
 * 순서대로 K번째 사람을 제거
 * 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속
 * N명의 사람이 모두 제거될 때까지 계속
 * 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열
 * # Problem
 * # Input
 * 첫째 줄에 N과 K
 * (1 ≤ K ≤ N ≤ 5,000)
 * # Memo
 * @see
 * @arguments
 * Case 1
 * ``
 */

function getSeqOfJosephus(n, k) {
  const queue = Array(n)
    .fill(1)
    .map((num, index) => num + index);
  const result = [];

  while (queue.length > 0) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    result.push(queue.shift());
  }

  return `<${result.join(', ')}>`;
}

const sample = [`7 3`];

sample.forEach((input) => {
  const [n, k] = input.split(' ');

  const sequence = getSeqOfJosephus(Number(n), Number(k));
  console.log(sequence);
});
