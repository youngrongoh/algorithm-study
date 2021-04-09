/**
 * @see https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 * @description
 * # Condition
 * 1. 각 양말의 컬러는 정수로 표시
 * 2. 양말들은 배열로 주어짐
 * 
 * # Problem
 * 컬러가 같은 양말이 몇 쌍 있는지 반환
 * 
 * # Input
 * 첫 번째 줄에 양말의 개수 n
 * 두 번째 줄에 어떤 양말들이 있는지 ar, 공백으로 구분
 * @arguments
 * `9
    10 20 20 10 10 30 50 10 20`
*/

const n = 9;
const ar = '10 20 20 10 10 30 50 10 20'.split(' ').map((value) => +value);

const result = sockMerchant(n, ar);
console.log(result);

function sockMerchant(n, ar) {
  const groups = {};
  for (let i = 0; i < n; i++) {
    const color = ar[i];
    if (Object.keys(groups).includes(color.toString(10))) {
      groups[color]++;
    } else {
      groups[color] = 1;
    }
  }
  const pairs = Object.values(groups).reduce(
    (pairs, count) => pairs + Math.floor(count / 2),
    0
  );
  return pairs;
}
