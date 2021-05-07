/**
 * @see https://programmers.co.kr/learn/courses/30/lessons/42578
 * @description
 * # Title: 위장
 * # Condition
 * 스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장
 * clothes의 각 행은 [의상의 이름, 의상의 종류]
 * 스파이가 가진 의상의 수는 1개 이상 30개 이하
 * 같은 이름을 가진 의상은 존재하지 않음
 * clothes의 모든 원소는 문자열
 * 모든 문자열의 길이는 1 이상 20 이하인 자연수, 알파벳 소문자 또는 '_'로 구성
 * 하루에 최소 한 개의 의상
 * # Problem
 * 서로 다른 옷의 조합의 수를 return
 * # Input
 * 스파이가 가진 의상들이 담긴 2차원 배열 clothes
 *
 * # Memo
 *
 * @see
 * @arguments
 * ## Case 1
 * clothes: [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]
 * ## Case 2
 * clothes: [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]
 * ## Case 3
 */

/* 2021.5.7 조합으로 푸는 방법 => 1번 케이스에서 런타임에러(콜스택 초과)
function combination(arr, count) {
  if (count === 1 || arr.length === 0) return arr;

  const result = [];
  arr.forEach((fixer, i) => {
    const rest = arr.slice(i + 1);
    const combinationArr = combination(rest, count - 1);

    const combined = combinationArr.map((n) => fixer * n);
    result.push(...combined);
  });

  return result;
}

function solution(clothes) {
  const closet = clothes.reduce((obj, cloth) => {
    const category = cloth[1];
    obj[category] = obj[category] ? obj[category] + 1 : 1;

    return obj;
  }, {});

  return Object.values(closet).reduce((cases, _, i, arr) => {
    combination(arr, i + 1).forEach((aCase) => {
      cases += aCase;
    });
    return cases;
  }, 0);
}
 */

function solution(clothes) {
  // 카테고리에 따라 몇 종류의 의상이 있는지 객체로 정리
  const closet = clothes.reduce((obj, cloth) => {
    const category = cloth[1];
    obj[category] = obj[category] ? obj[category] + 1 : 1;
    return obj;
  }, {});

  const cases = Object.values(closet);

  const result = cases.reduce((count, aCase) => {
    // 어떤 카테고리의 의상은 선택하지 않는 경우 추가
    return count * (aCase + 1);
  }, 1);

  return result - 1;
}

const sample = [
  [
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ],
  [
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ],
  [
    ['crowmask', 'face'],
    ['bluesunglasses', 'face1'],
    ['smoky_makeup', 'face2'],
    ['crowmask1', 'face3'],
    ['bluesunglasses2', 'face4'],
    ['smoky_makeup3', 'face5'],
    ['crowmask4', 'face6'],
    ['bluesunglasses5', 'face7'],
    ['smoky_makeup6', 'face8'],
    ['crowmask7', 'face9'],
    ['bluesunglasses8', 'face10'],
    ['smoky_makeup9', 'face11'],
    ['crowmask10', 'face12'],
    ['bluesunglasses11', 'face13'],
    ['smoky_makeup12', 'face14'],
    ['crowmask', 'face15'],
    ['bluesunglasses', 'face16'],
    ['smoky_makeup', 'face17'],
    ['crowmask1', 'face18'],
    ['bluesunglasses2', 'face19'],
    ['smoky_makeup3', 'face20'],
    ['crowmask4', 'face21'],
    ['bluesunglasses5', 'face22'],
    ['smoky_makeup6', 'face23'],
    ['crowmask7', 'face24'],
    ['bluesunglasses8', 'face25'],
    ['smoky_makeup9', 'face26'],
    ['crowmask10', 'face27'],
    ['bluesunglasses11', 'face28'],
    ['smoky_makeup12', 'face29'],
  ],
];

sample.forEach((input) => {
  const clothes = input;

  const result = solution(clothes);

  console.log(result);
});
