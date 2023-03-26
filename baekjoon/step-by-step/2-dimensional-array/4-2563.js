/**
 * @see https://www.acmicpc.net/problem/2563
 * @description
 * # Title: 색종이
 * ## Condition
 * 가로, 세로의 크기가 각각 100인 정사각형 모양의 흰색 도화지
 * 도화지 위에 가로, 세로의 크기가 각각 10인 정사각형 모양의 검은색 색종이를 색종이의 변과 도화지의 변이 평행하도록 붙임
 * ## Problem
 * 첫째 줄에 색종이가 붙은 검은 영역의 넓이를 출력
 * ## Input
 * 첫째 줄에 색종이의 수 N(N <= 100)
 * 둘째 줄부터 한 줄에 하나씩 색종이를 붙인 위치를 나타내는 두 개의 자연수
 * 첫 번째 자연수는 색종이의 왼쪽 변과 도화지의 왼쪽 변 사이의 거리
 * 두 번째 자연수는 색종이의 아래쪽 변과 도화지의 아래쪽 변 사이의 거리
 * ## Memo
 * 
 */

const func = (input) => {
  const [[n], ...poses] = input.split('\n').map((line) => line.split(' ').map(num => +num));
  const [width, height] = poses.reduce(([maxX, maxY], pose) => {
    const [poseX, poseY] = [pose[0] + 10, pose[1] + 10];
    return [maxX < poseX ? poseX : maxX, maxY < poseY ? poseY : maxY];
  }, [0, 0]);
  const graph = new Array(height).fill([]).map(() => new Array(width).fill(0));
  poses.forEach(([x, y], i) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        graph[y+i][x+j] = 1;
      }
    }
  });
  return graph.reduce((total, row) => total + row.reduce((acc, value) => acc + value, 0), 0);
};

/* 
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim();
  const result = solve(input);
  console.log(result);

  function solve(input) {

  }
 */
// const forSubmit = (input) => {
  
// }

module.exports = [ func ];
