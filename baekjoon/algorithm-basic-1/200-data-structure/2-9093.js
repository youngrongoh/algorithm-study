/**
 * @see https://www.acmicpc.net/problem/9093
 * @description
 * # Title: 단어 뒤집기
 * # Condition
 * 단어의 순서는 바꿀 수 없음
 * 단어는 영어 알파벳으로만 구성
 * # Problem
 * 각 테스트 케이스에 대해서, 입력으로 주어진 문장의 단어를 모두 뒤집어 출력
 * # Input
 * 첫째 줄에 테스트 케이스의 개수 T
 * 각 테스트 케이스는 한 줄에 문장 하나
 * 단어의 길이는 최대 20, 문장의 길이는 최대 1000
 * 단어와 단어 사이에는 공백 하나
 * # Memo
 * @see
 * @arguments
 * `2
I am happy today
We want to win the first prize`
 */

function reverseWords(str) {
  const words = str.split(' ');

  const reversed = words.map((word) => {
    return [...word].reverse().join('');
  });

  return reversed.join(' ');
}

const sample = [
  `2
I am happy today
We want to win the first prize`,
];

sample.forEach((input) => {
  const [, ...strs] = input.split('\n');

  let result = '';
  strs.forEach((str) => {
    result += reverseWords(str) + '\n';
  });

  console.log(result);
});
