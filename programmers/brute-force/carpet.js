/**
 * @see https://programmers.co.kr/learn/courses/30/lessons/42842
 * @description
 * # Title: 카펫
 * # Condition
 * 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫
 * 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 긺
 * # Problem
 * 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return
 * # Input
 * 갈색 격자의 수 brown (8 <= brown <= 5,000)
 * 노란색 격자의 수 yellow (1 <= yellow <= 2,000,000)
 * # Memo
 * yellow의 약수 중 큰 수가 내부의 너비, 작은 수가 높이
 * yellow = (내부 너비) * (내부 높이)
 * width = (내부 너비) + 2
 * height = (내부 높이) + 2
 * yellow = (width - 2) * (height - 2)
 *
 * brown = 2 * (width + height) - 4
 * width + height = (brown + 4) / 2
 *
 * width * height = yellow - 4 + 2 * (width + height)
 *                = yellow + brown
 * @see
 * @arguments
 * ## Case 1
 * brown: 10
 * yellow: 2
 * ## Case 2
 * brown: 8
 * yellow: 1
 * ## Case 3
 * brown: 24
 * yellow: 24
 */

function solution(brown, yellow) {
  const answer = [];

  for (let i = 1; i <= yellow; i++) {
    if (yellow % i !== 0) continue;

    const width = i + 2;
    const height = yellow / i + 2;

    if (width < height || width * height !== brown + yellow) continue;

    answer.push(width, height);
  }

  return answer;
}

const sample = [
  [10, 2],
  [8, 1],
  [24, 24],
];

sample.forEach((input) => {
  const brown = input[0];
  const yellow = input[1];

  const result = solution(brown, yellow);

  console.log(result);
});
