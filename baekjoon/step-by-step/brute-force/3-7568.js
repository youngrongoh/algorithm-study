/**
 * @see https://www.acmicpc.net/problem/7568
 * @description
 * # Title: 덩치
 * # Condition
 * 몸무게가 x kg이고 키가 y cm라면 이 사람의 덩치는 (x, y)로 표시
 * 두 사람 A 와 B의 덩치가 각각 (x, y), (p, q)라고 할 때 x > p 그리고 y > q 이라면 우리는 A의 덩치가 B의 덩치보다 "더 크다"
 * 그 외에는 크기를 정할 수 없음
 * 자신보다 더 큰 덩치의 사람이 k명이라면 그 사람의 덩치 등수는 k+1
 * # Problem
 * 입력에 나열된 사람의 덩치 등수를 구해서 그 순서대로 첫 줄에 출력
 * 각 덩치 등수는 공백문자로 분리
 * # Input
 * 첫 줄에는 전체 사람의 수 N (2 ≤ N ≤ 50)
 * 이어지는 N개의 줄에는 각 사람의 몸무게와 키를 나타내는 양의 정수 x와 y 공백으로 구분 (10 ≤ x, y ≤ 200)
 * # Memo
 * 
 * @see
 * @arguments
 * `5
55 185
58 183
88 186
60 175
46 155`
 */

function getSizeRanks(students) {
  const ranks = [];

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const weight = student[0];
    const height = student[1];

    let rank = 1;
    for (let j = 0; j < students.length; j++) {
      const compared = students[j];
      const comparedWeight = compared[0];
      const comparedHeight = compared[1];
      if (comparedWeight > weight && comparedHeight > height) {
        rank++;
      }
    }

    ranks.push(rank);
  }

  return ranks;
}

const samples = [
  `5
55 185
58 183
88 186
60 175
46 155`,
];

samples.forEach((sample) => {
  const input = sample.split('\n');

  const students = [];
  for (let i = 1; i <= Number(input[0]); i++) {
    const student = input[i].split(' ').map((value) => Number(value));
    students.push(student);
  }

  const ranks = getSizeRanks(students);

  const result = ranks.join(' ');
  console.log(result);
});
