/**
 * @see https://www.acmicpc.net/problem/2108
 * @description
 * # Title: 통계학
 * # Condition
 * N개의 수를 대표하는 기본 통계값(N은 홀수)
 * - 산술평균 : N개의 수들의 합을 N으로 나눈 값
 * - 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
 * - 최빈값 : N개의 수들 중 가장 많이 나타나는 값
 * - 범위 : N개의 수들 중 최댓값과 최솟값의 차이
 * # Problem
 * 첫째 줄에는 산술평균을 출력(소수점 이하 첫째 자리에서 반올림)
 * 둘째 줄에는 중앙값을 출력
 * 셋째 줄에는 최빈값을 출력(여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력)
 * 넷째 줄에는 범위를 출력
 * # Input
 * 첫째 줄에 수의 개수 N(1 ≤ N ≤ 500,000, N은 홀수)
 * 다음 N개의 줄에는 정수
 * 정수의 절댓값은 4,000을 넘지 않음
 * # Memo
 *
 * @see
 * @arguments
 * Case1 
 * `5
1
3
8
-2
2`
 * Case2
 * `1
4000`
* Case3
 * `5
-1
-2
-3
-1
-2`
 */

// 산술평균
function getAverage(nums, count) {
  const average = nums.reduce((sum, n) => sum + n, 0) / count;

  return Math.round(average);
}

// 중앙값
function getCentral(sorted, count) {
  return sorted[Math.floor(count / 2)];
}

// 최빈값
function getMostFreq(nums) {
  const frequencies = nums.reduce((obj, n) => {
    obj[n] = obj[n] ? obj[n] + 1 : 1;
    return obj;
  }, {});

  const descFrequencies = Object.entries(frequencies).sort((a, b) => {
    // 빈도에 따라 정렬(인덱스 0은 수, 1은 빈도)
    return b[1] - a[1];
  });

  let mostFreq = descFrequencies[0];

  // 최빈값이 2개 이상이면 그 중 두 번째로 작은 수 할당
  const mostFreqs = descFrequencies.filter((freq) => freq[1] === mostFreq[1]);
  if (mostFreqs.length > 1) {
    // 수의 크기에 따라 정렬
    mostFreq = mostFreqs.sort((a, b) => a[0] - b[0])[1];
  }

  return mostFreq[0];
}

// 범위
function getRange(sorted, count) {
  return sorted[count - 1] - sorted[0];
}

const sample = [
  `5
  1
  3
  8
  -2
  2`,
  `1
  4000`,
  `5
  -1
  -2
  -3
  -1
  -2`,
];

sample.forEach((input) => {
  const [n, ...nums] = input.split('\n');

  const count = Number(n);
  const sorted = nums.map((n) => Number(n)).sort((a, b) => a - b);

  const average = getAverage(sorted, count);
  const central = getCentral(sorted, count);
  const mostFreq = getMostFreq(sorted);
  const range = getRange(sorted, count);

  console.log([average, central, mostFreq, range].join('\n'));
});
