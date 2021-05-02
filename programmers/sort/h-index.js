/**
 * @see https://programmers.co.kr/learn/courses/30/lessons/42747
 * @description
 * # Title: H-index
 * # Condition
 * 1. 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하
 * 2. 논문별 인용 횟수는 0회 이상 10,000회 이하
 * # Problem
 * H-Index를 return 하도록 solution 함수를 작성
 * # Input
 * 발표한 논문의 인용 횟수를 담은 배열 citations
 * # Memo
 * H-Index: 과학자의 생산성과 영향력을 나타내는 지표
 * 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상
 * 나머지 논문이 h번 이하 인용
 * h의 최댓값이 H-Index
 * --------처음 계획-실패--------
 * 1. 내림차순 정렬
 * 2. 큰 값부터 뽑아서 반복
 * 3. 배열에 뽑은 값 이상인 값의 개수 파악
 * 4. 뽑은 값과 개수가 일치하면 그 값을 반환
 * ---------------------------
 * 1. 많이 인용된 순으로 정렬
 * 2. 하나씩 순회
 * 3. 현재 인덱스 수와 같아지거나 작아지기 시작하는 값 반환
 * @see https://www.ibric.org/myboard/read.php?Board=news&id=270333
 * @arguments
 * ## case1
 * - citations: [3, 0, 6, 1, 5]
 */

/* 2021.5.2 실패
function solution(citaions) {
  const sorted = [...citaions].sort((a, b) => b - a);
  const length = sorted.length;

  let max = 0;
  for (let i = 0; i < length; i++) {
    const h = sorted[i];
    const count = sorted.filter((num) => h <= num).length;

    if (h <= count) {
      max = h;
      break;
    }
  }

  if (max === 0) {
    const isLargerForLen = sorted.every((num) => length <= num);
    if (isLargerForLen) max = length;
  }

  return max;
}
 */

function solution(citations) {
  // 내림차순 정렬
  const sorted = [...citations].sort((a, b) => b - a);

  const length = sorted.length;

  let h = 0;
  for (let i = 0; i < length; i++) {
    if (sorted[i] < 1) break;

    h = i + 1;

    // 논문 수와 피인용수 비교
    if (i + 1 >= sorted[i + 1]) break;
  }

  return h;
}

const samples = [
  [3, 0, 6, 1, 5],
  [0, 0, 0],
  [1, 1, 1],
  [2, 2],
  [6, 6, 5, 9, 7, 7, 10, 7, 8, 10],
  [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12],
  [10000, 9000, 8000],
  [10000, 9000, 1, 2],
  [1, 2, 10000, 9000],
  [1, 3, 5, 7, 9, 11],
];

samples.forEach((input) => {
  const result = solution(input);

  console.log(result);
});
