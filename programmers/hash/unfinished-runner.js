/**
 * @see https://programmers.co.kr/learn/courses/30/lessons/42842
 * @description
 * # Title: 완주하지 못한 선수
 * # Condition
 * 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주
 * (completion의 길이는 participant의 길이보다 1 작음)
 * 참여한 선수의 수는 1명 이상 100,000명 이하
 * 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자
 * 참가자 중에는 동명이인이 있을 수 있음
 * # Problem
 * 완주하지 못한 선수의 이름을 return
 * # Input
 * 마라톤에 참여한 선수들의 이름이 담긴 배열 participant
 * 완주한 선수들의 이름이 담긴 배열 completion
 * # Memo
 *
 * @see https://im-developer.tistory.com/127
 * @arguments
 * ## Case 1
 * participant: ["leo", "kiki", "eden"]
 * completion: 	["eden", "kiki"]
 * ## Case 2
 * participant: ["marina", "josipa", "nikola", "vinko", "filipa"]
 * completion: ["josipa", "filipa", "marina", "nikola"]
 * ## Case 3
 * participant: ["mislav", "stanko", "mislav", "ana"]
 * completion: ["stanko", "ana", "mislav"]
 */

/* 2021.5.6 정확성 테스트 1(1), 효율성 테스트 0
function solution(participant, completion) {
  const copied = [...completion];

  const unfinised = participant.filter((runner) => {
    let complete = false;

    copied.forEach((completed, i) => {
      if (runner === completed) {
        copied.splice(i, 1);
        complete = true;
      }
    });

    return !complete;
  });

  return unfinised.pop();
}
 */

/* 정확성, 효율성 통과
// 참가자 명단을 객체로 만들어 찾는 방법
function solution(participant, completion) {
  const obj = participant.reduce((obj, name) => {
    obj[name] = obj[name] ? obj[name] + 1 : 1;
    return obj;
  }, {});

  completion.forEach((name) => {
    if (obj[name]) obj[name] -= 1;

    if (obj[name] === 0) delete obj[name];
  });

  return Object.keys(obj).pop();
}
 */

// 완주자 명단을 객체로 만들어 찾는 방법
function solution(participant, completion) {
  const obj = completion.reduce((obj, name) => {
    obj[name] = obj[name] ? obj[name] + 1 : 1;
    return obj;
  }, {});

  return participant.find((name) => {
    if (obj[name]) {
      obj[name] -= 1;
    } else {
      return true;
    }
  });
}

const sample = [
  [
    ['leo', 'kiki', 'eden'],
    ['eden', 'kiki'],
  ],
  [
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola'],
  ],
  [
    ['mislav', 'stanko', 'mislav', 'ana'],
    ['stanko', 'ana', 'mislav'],
  ],
];

sample.forEach((input) => {
  const participant = input[0];
  const completion = input[1];

  const result = solution(participant, completion);
  console.log(result);
});
