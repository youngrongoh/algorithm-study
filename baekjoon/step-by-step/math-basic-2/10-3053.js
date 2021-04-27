/**
 * @see https://www.acmicpc.net/problem/3053
 * @description
 * # Title: 택시 기하학
 * # Condition
 * 택시 기하학에서 두 점 T1(x1,y1), T2(x2,y2) 사이의 거리 D
 * D(T1,T2) = |x1-x2| + |y1-y2|
 * 택시 기하학에서 원의 정의는 유클리드 기하학에서 원의 정의와 동일
 * 원: 평면 상의 어떤 점에서 거리가 일정한 점들의 집합
 * 정답과의 오차는 0.0001까지 허용
 * # Problem
 * 첫째 줄에는 유클리드 기하학에서 반지름이 R인 원의 넓이 출력
 * 둘째 줄에는 택시 기하학에서 반지름이 R인 원의 넓이 출력
 * # Input
 * 첫째 줄에 반지름 R
 * (R <= 10000, R은 자연수)
 * # Memo
 * (유클리드 기하학 원의 넓이) = PI * R^2
 * (택시 기하학 원의 넓이) = 2 * r^2
 * @see https://namu.wiki/w/%ED%83%9D%EC%8B%9C%20%EA%B8%B0%ED%95%98%ED%95%99
 * @arguments
 * `1`
 * `21`
 * `42`
 */

function calcCircleArea(r) {
  return Math.PI * r * r;
}

function calcCircleAreaInTaxi(r) {
  return 2 * r * r;
}

const samples = [`1`, `21`, `42`];

samples.forEach((input) => {
  const r = Number(input);

  const area = calcCircleArea(r).toFixed(6);
  const areaInTaxi = calcCircleAreaInTaxi(r).toFixed(6);

  console.log(area + '\n' + areaInTaxi);
});
