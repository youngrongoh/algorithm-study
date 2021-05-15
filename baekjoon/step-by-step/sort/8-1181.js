/**
 * @see https://www.acmicpc.net/problem/1181
 * @description
 * # Title: 단어 정렬
 * # Condition
 * 알파벳 소문자로 이루어진 N개의 단어
 * 길이가 짧은 것부터
 * 길이가 같으면 사전 순으로
 * 같은 단어가 여러 번 입력된 경우에는 한 번씩만 출력
 * # Problem
 * 조건에 따라 정렬하여 단어들을 출력
 * # Input
 * 첫째 줄에 단어의 개수 N (1 ≤ N ≤ 20,000)
 * 둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩
 * (문자열의 길이는 50을 넘지 않음)
 * # Memo
 *
 * @see
 * @arguments
 * Case1
 * `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`
*/

function sortStrings(arr) {
  // 입력 arr에 대한 불변성 유지하기 위해 복제해서 정렬
  const sorted = [...arr].sort((a, b) => {
    if (a.length === b.length) {
      // 길이 같으면 사전순 정렬
      return a.localeCompare(b);
    } else {
      // 길이가 다를 때 길이가 짧은 것부터 정렬
      return a.length - b.length;
    }
  });

  return sorted;
}

const sample = [
  `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`,
];

sample.forEach((input) => {
  const [, ...arr] = input.split('\n');

  const sorted = sortStrings(arr);

  console.log(sorted.join('\n'));
});
