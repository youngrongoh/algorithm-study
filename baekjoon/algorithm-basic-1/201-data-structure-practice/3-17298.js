/**
 * @see https://www.acmicpc.net/problem/17298
 * @description
 * # Title: 오큰수
 * # Condition
 * 크기가 N인 수열 A = A1, A2, A3, ..., An
 * 수열의 각 원소 Ai에 대해 오큰수 NGE(i), (i > 0)
 * Ai의 오큰수는 오른쪽에 있으면서 Ai보다 큰 수 중 가장 왼쪽에 있는 수
 * 그런 수가 없는 경우, 오큰수는 -1
 * # Problem
 * 총 N개의 수 NGE(1), NGE(2), ..., NGE(N)을 공백으로 구분해 출력
 * # Inputs
 * 첫째 줄에 수열 A의 크기 n (1 ≤ n ≤ 1,000,000)
 * 둘째 줄에 수열 A의 원소 A1, A2, ..., An (1 ≤ Ai ≤ 1,000,000)
 * # Memo
 * i번째 수보다 인덱스가 높고, 숫자가 큰 수의 배열의 첫번째 인자
 * @see
 * @arguments
 * Case 1
 * `4
3 5 2 7`
 * Case 2
 * `4
9 5 4 8`
 */

function getNGEs(input) {
  const splited = input.split('\n');
  const array = splited[1].split(' ').map(n => parseInt(n));
  
  const nges = array.map((a, i) => {
    const rightAndBiggers = array.filter((b, j) => {
      if (j <= i) return;
      return a < b;
    })

    return rightAndBiggers[0] || -1;
  });

  return nges.join(' ');
}

function getNGEsWithStack1(input) {
  const splited = input.split('\n');
  const n = parseInt(splited[0]);
  const array = splited[1].split(' ').map(n => parseInt(n));
  
  const stack = [];
  for (let i = 0; n > i; i++) {
    for (let j = i + 1; n >= j; j++) {
      if (j === n) {
        stack.push(-1);
        break;
      };
      
      if (array[j] > array[i]) {
        stack.push(array[j]);
        break;
      }
    }
  }

  return stack.join(' ');
}

function getNGEsWithStack2(input) {
  const splited = input.split('\n');
  const n = parseInt(splited[0]);
  const array = splited[1].split(' ').map(n => parseInt(n));

  const result = new Array(n).fill(-1);
  const indexStack = [];

  for (let i = 0; i < array.length; i++) {
    while (indexStack.length > 0) {
      let noNGEIndex = indexStack[indexStack.length - 1];
      if (array[noNGEIndex] >= array[i]) break;
      result[indexStack.pop()] = array[i];
    }
    indexStack.push(i);
  }
  return result.join(' ');
}

module.exports = [ getNGEs, getNGEsWithStack1, getNGEsWithStack2 ];
