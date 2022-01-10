/**
 * @see https://www.acmicpc.net/problem/17299
 * @description
 * # Title: 오등큰수
 * # Condition
 * 크기가 N인 수열 A = A1, A2, A3, ..., An
 * 수열의 각 원소 Ai에 대해서 오등큰수 NGF(i), (i > 0)
 * Ai가 수열 A에서 등장한 횟수를 F(Ai)
 * Ai의 오등큰수는 오른쪽에 있으면서 수열 A에서 등장한 횟수가 F(Ai)보다 큰 수 중에서 가장 왼쪽에 있는 수
 * 없는 경우에 오등큰수는 -1
 * # Problem
 * 총 N개의 수 NGF(1), NGF(2), ..., NGF(N)을 공백으로 구분해 출력
 * # Input
 * 첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000,000)
 * 둘째에 수열 A의 원소 A1, A2, ..., AN (1 ≤ Ai ≤ 1,000,000)
 * # Memo
 * @see
 * @arguments
 * Case 1
 * `7
1 1 2 3 4 2 1`
 */

// 시간 초과
function getNGFs(input) {
  let result = '';

  const splited = input.split('\n');
  const array = splited[1].split(' ').map(n => parseInt(n));

  const fs = array.map(n => f(n, array));
  const ngfs = array.map((_, i) => ngf(i, array, fs));

  result = ngfs.join(' ');
  return result;
}

const f = (n, arr) => {
  let count = 0;
  arr.forEach(_n => {
    if (n === _n) count++;
  })

  return count;
}

const ngf = (idx, arr, fs) => {
  let n = -1;
  for (let i = idx + 1; i < fs.length; i++) {
    if (fs[idx] < fs[i]) {
      n = arr[i];
      break;
    }
  }
  return n;
}

// 성공
const getNGFsWithStack = (input) => {
  const splited = input.split('\n');
  const array = splited[1].split(' ').map(n => parseInt(n));
  
  const counts = array.reduce((acc, n) => {
    if (acc[n]) {
      acc[n]++;
    } else {
      acc[n] = 1;
    }
    return acc;
  }, {});

  const n = parseInt(splited[0]);
  const result = new Array(n).fill(-1);

  const stack = [];
  for (let i = 0; i < array.length; i++) {
    while (
      stack.length > 0 &&
      counts[array[stack[stack.length - 1]]] < counts[array[i]]
    ) {
      result[stack.pop()] = array[i];
    }

    stack.push(i);
  }
  return result.join(' ');
}

module.exports = [ getNGFs, getNGFsWithStack ];
