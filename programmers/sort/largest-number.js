/**
 * @see https://programmers.co.kr/learn/courses/30/lessons/42746
 * @description
 * # Title: 가장 큰 수
 * # Condition
 * # Problem
 * 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수(문자열로 반환)
 * # Input
 * 0 또는 양의 정수가 담긴 배열 numbers
 * (numbers의 길이는 1 이상 100,000 이하)
 * (numbers의 원소는 0 이상 1,000 이하)
 * # Memo
 * @see https://brunch.co.kr/@swimjiy/12
 * @arguments
 * ## case1
 * - numbers: [6, 10, 2]
 * ## case2
 * - numbers: [3, 30, 34, 5, 9]
 */

/* 2021.5.1 테스트 케이스 반례 존재
function solution(input) {
  const numbers = [...input];

  for (let i = 1; i < numbers.length; i++) {
    const temp = String(numbers[i]);

    for (let j = i - 1; j >= 0; j--) {
      const compared = String(numbers[j]);

      if (temp <= compared) break;

      if (temp[0] === compared[0]) {
        let isChange = true;

        for (let k = 1; k < temp.length || k < compared.length; k++) {
          if (temp[k] === '0' && compared[k] === undefined) {
            isChange = false;
          }
        }

        if (!isChange) break;
      }

      numbers[j + 1] = numbers[j];
      numbers[j] = temp;
    }
  }

  const result = numbers.join('');
  return Number(result) === 0 ? '0' : result;
}
 */

function solution(input) {
  const numbers = [...input].sort((a, b) =>
    String(a) + String(b) > String(b) + String(a) ? -1 : 1
  );

  const result = numbers.join('');
  return Number(result) === 0 ? '0' : result;
}

const samples = [
  [6, 10, 2],
  [3, 30, 34, 5, 9],
  [0, 0],
];

samples.forEach((input) => {
  const result = solution(input);

  console.log(result);
});
