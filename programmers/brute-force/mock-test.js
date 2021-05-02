/**
 * @see https://programmers.co.kr/learn/courses/30/lessons/42840
 * @description
 * # Title: 모의고사
 * # Condition
 * 1. 시험은 최대 10,000 문제
 * 2. 문제의 정답은 1, 2, 3, 4, 5중 하나
 * 3. 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬
 * # Problem
 * 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return
 * # Input
 * 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers
 * # Memo
 * 수포자 삼인방은 모의고사에 수학 문제를 전부 찍음
 * 1번 수포자가 찍는 방식: [1, 2, 3, 4, 5]
 * 2번 수포자가 찍는 방식: [2, 1, 2, 3, 2, 4, 2, 5]
 * 3번 수포자가 찍는 방식: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
 * @see
 * @arguments
 * ## Case 1
 * answers: [1,2,3,4,5]
 * ## Case 2
 * answers: [1,3,2,4,2]
 */

function solution(answers) {
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const students = [student1, student2, student3];

  let max = 0;

  const results = students.map((student, num) => {
    const count = answers.reduce((count, answer, i) => {
      const index = i % student.length;

      if (answer === student[index]) return count + 1;

      return count;
    }, 0);

    const id = num + 1;

    if (count >= max) max = count;

    return { id, count };
  });

  const rankers = results.filter((result) => result.count === max);

  return rankers.map((ranker) => ranker.id);
}

const samples = [
  [1, 2, 3, 4, 5],
  [1, 3, 2, 4, 2],
  [1, 1, 1, 1, 1],
  [5, 5, 5],
  [1, 2, 3, 5, 4, 2, 3, 2, 3, 4, 2, 3, 1, 2, 1, 3, 2, 1, 4, 3, 2, 4],
];

samples.forEach((input) => {
  const result = solution(input);

  console.log(result);
});
