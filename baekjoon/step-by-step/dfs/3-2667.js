/**
 * @see https://www.acmicpc.net/problem/2667
 * @description
 * # Title: 단지번호붙이기
 * ## Problem
 * 첫 번째 줄에는 총 단지수를 출력
 * 다음 줄부터 각 단지내 집의 수를 오름차순으로 정렬하여 한 줄에 하나씩 출력
 * ## Input
 * 첫 번째 줄에는 정사각형 지도의 변의 길이 N(5 <= N <= 25)
 * 그 다음 줄부터 각각 N개의 자료 D(1은 집이 있는 곳, 0은 집이 없는 곳)
 * ## Condition
 * 단지는 연결된 집의 모임
 * 연결되었다는 것은 어떤 집이 좌우, 혹은 아래위로 다른 집이 있는 경우
 * 대각선상에 집이 있는 경우는 연결된 것이 아니다
 * ## Memo
 */

function solve(input) {
  const [n, ...map] = input.split('\n').map((line, i) => i < 1 ? Number(line): line.split('').map((n) => Number(n)));
  const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

  const result = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const isVisited = visited[i][j];
      if (isVisited) continue;
      visited[i][j] = true;
      
      if (map[i][j] === 0) continue;

      let count = 0;
      const stack = [[i, j]];

      while (stack.length > 0) {
        const [row, col] = stack.pop();
        count++;

        const adjacents = [[row - 1, col], [row, col + 1], [row + 1, col], [row, col - 1]].filter(([row, col]) => map[row]?.[col]);
        adjacents.forEach(([row, col]) => {
          const isVisited = visited[row][col];
          if (isVisited) return;
          visited[row][col] = true;
          
          const isHouse = map[row][col];
          if (!isHouse) return;
          stack.push([row, col]);
        })
      };
      
      if (count > 0) result.push(count);
    };
  };

  return result.length + '\n' + result.sort((a, b) => a - b).join('\n');
}

/* 
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim();
  const result = solve(input);
  console.log(result);
 */

module.exports = [ solve ];
