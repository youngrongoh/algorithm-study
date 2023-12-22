/**
 * @see https://www.acmicpc.net/problem/11724
 * @description
 * # Title: 연결 요소의 개수
 * ## Problem
 * 첫째 줄에 연결 요소의 개수를 출력
 * ## Input
 * 첫째 줄에 정점의 개수 N과 간선의 개수 M(1 ≤ N ≤ 1,000, 0 ≤ M ≤ N×(N-1)/2)
 * 둘째 줄부터 M개의 줄에 간선의 양 끝점 u와 v(1 ≤ u, v ≤ N, u ≠ v)
 * ## Condition
 * 같은 간선은 한 번만 주어진다.
 * 주어진 그래프는 방향이 없다.
 * ## Memo
 */

function solve(input) {
  const [[n], ...edges] = input.split('\n').map((line) => line.split(' ').map((s) => parseInt(s, 10)));
  const graph = Array.from({ length: n }, () => ({ isVisited: false, adjacents: [] }));
  edges.forEach(([u, v]) => {
    graph[u - 1].adjacents.push(v - 1);
    graph[v - 1].adjacents.push(u - 1);
  });

  let count = 0;
  for (const i in graph) {
    if (graph[i].isVisited) continue;
    count++;
    const stack = [i];
    while (stack.length > 0) {
      const node = graph[stack.pop()];

      if (node.isVisited) continue;
      node.isVisited = true;
      stack.push(...node.adjacents.filter((adjacent) => !graph[adjacent].isVisited));
    };
  }

  return count;
}

/* 
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim();
  const result = solve(input);
  console.log(result);
 */

module.exports = [ solve ];
