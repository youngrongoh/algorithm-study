/**
 * @see https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 * @description
 * # Condition
 * 1. 등산객이 지나온 코스의 수 steps
 * 2. 오르막 코스를 U, 내리막 코스를 D, 고도는 1단위 씩 변화
 * 4. 산은 고도 0부터 올라가기 시작해서, 0으로 내려오는 것으로 끝
 * 5. 골짜기는 고도 0부터 내려가기 시작해서, 0으로 올라오는 것으로 끝
 * 
 * # Problem
 * 등산하는 동안 지나온 골짜기의 수를 반환
 * 
 * # Input
 * 지나온 코스의 수 steps: number
 * 지나온 코스 문자열 path: string
 * @arguments
 * `8
    UDDDUDUU`
*/

const steps = 8;
const path = 'UDDDUDUU';
const result = countingValleys(steps, path);
console.log(result);

function countingValleys(steps, path) {
  let valleyCount = 0;
  let altitude = 0;
  let isValley = false;

  for (let i = 0; i < steps; i++) {
    const step = path[i];

    if (altitude === 0) {
      isValley = step === 'D';
    }

    altitude = step === 'U' ? ++altitude : --altitude;

    if (isValley && altitude === 0) {
      valleyCount++;
    }
  }

  return valleyCount;
}
