/**
 * @see https://www.acmicpc.net/problem/10814
 * @description
 * # Title: 나이순 정렬
 * # Condition
 * 회원들을 나이가 증가하는 순으로, 
 * 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬
 * # Problem
 * 한 줄에 한 명씩 나이와 이름을 공백으로 구분해 출력
 * # Input
 * 첫째 줄에 온라인 저지 회원의 수 N (1 ≤ N ≤ 100,000)
 * 둘째 줄부터 N개의 줄에는 각 회원의 나이와 이름이 공백으로 구분
 * 나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수
 * 이름은 알파벳 대소문자로 이루어져 있고, 길이가 100보다 작거나 같은 문자열
 * 입력은 가입한 순서대로
 * # Memo
 *
 * @see
 * @arguments
 * Case1
 * `3
21 Junkyu
21 Dohyun
20 Sunyoung`
 */

function sortMembers(members) {
  const addedIndex = members.map((member, i) => [i, ...member.split(' ')]);

  const sorted = addedIndex.sort((a, b) => {
    const indexComparison = a[0] - b[0];
    const ageComparison = a[1] - b[1];

    // age가 같으면 index 비교
    if (ageComparison === 0) return indexComparison;

    return ageComparison;
  });

  // index 정보 제외하고 문자열로 변환
  return sorted.map((member) => member.slice(1).join(' '));
}

const sample = [
  `3
21 Junkyu
21 Dohyun
20 Sunyoung`,
  `6
20 a
28 b
22 c
25 d
22 e
20 f`,
];

sample.forEach((input) => {
  const [, ...members] = input.split('\n');

  const sorted = sortMembers(members);

  console.log(sorted.join('\n'));
});
