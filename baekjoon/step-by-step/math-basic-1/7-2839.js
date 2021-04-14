/**
 * @see https://www.acmicpc.net/problem/2839
 * @description
 * # Title: 설탕 배달
 * # Condition
 * 1. 사탕가게에 설탕을 정확하게 N kg 배달
 * 2. 설탕은 3킬로그램 봉지와 5킬로그램 봉지에 담겨져 있음
 * 3. 최대한 적은 개수의 봉지를 들고 가도록
 * # Problem
 * 상근이가 배달하는 봉지의 최소 개수를 출력
 * 정확하게 N킬로그램을 만들 수 없을 때는 -1 출력
 * # Input
 * 첫째 줄에 N(3 ≤ N ≤ 5000)
 * # Memo
 * N = 3x + 5y
 * case1 - 5 10 15 => 5y
 * case2 - 8 13 16 => 3x + 5y (x <= y)
 * case3 - 11 14 18 19 => 3x + 5y (x > y)
 * case4 - 3 6 9 => 3x
 * count = x + y
 * @arguments
 * `18`
 * `4`
 * `6`
 * `9`
 * `11`
 */

// Fail
/* function measureCount(weight) {
  const value = weight / 5;
  const remain = weight % 5;
  
  if (remain === 0) return value;
  
  if (remain % 3 === 0) {
      return Math.floor(value) + remain / 3;
  }
  
  if (weight % 3 > 0) {
      for (let i = Math.floor(value); i > 0; i++) {
          const count = (weight - 5 * i) / 3;
          
          if (Number.isInteger(count)) return count + i;
      }
  }
  
  return -1;
} */

// Solve
function measureCount(weight) {
  const value = weight / 5;

  for (let i = Math.floor(value); i >= 0; i--) {
    const count = (weight - 5 * i) / 3; // weight = 3 * x + 5 * y

    if (Number.isInteger(count)) return count + i;
  }

  return -1;
}

const testArr = new Array(10).fill(0).map(() => Math.floor(Math.random() * (50 - 3 + 1) + 3));
// const inputArr = ['18', '4', '6', '9', '11', '3', '5000'];
const inputArr = testArr;
for (input of inputArr) {
  const weight = Number(input);
  const result = measureCount(weight);

  console.log(input, result);
}
