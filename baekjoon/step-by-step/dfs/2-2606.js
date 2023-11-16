/**
 * @see https://www.acmicpc.net/problem/2606
 * @description
 * # Title: 바이러스
 * ## Problem
 * 1번 컴퓨터가 웜 바이러스에 걸렸을 때, 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 첫째 줄에 출력
 * ## Input
 * 첫째 줄에는 컴퓨터의 수 N(N <= 100, N은 양의 정수)
 * 둘째 줄에는 네트워크 상에서 직접 연결되어 있는 컴퓨터 쌍의 수 M
 * 다음 줄부터 한 줄에 한 쌍씩 네트워크 상에서 직접 연결되어 있는 컴퓨터의 번호 쌍
 * ## Condition
 * 컴퓨터에는 1번 부터 차례대로 번호가 매겨진다
 * 한 컴퓨터가 웜 바이러스에 걸리면 그 컴퓨터와 네트워크 상에서 연결되어 있는 모든 컴퓨터는 웜 바이러스에 걸리게 된다
 * ## Memo
 */

function solve(input) {
  const [n, m, ...edges] = input.split('\n').map((line, i) => i < 2 ? Number(line): line.split(' ').map((n) => Number(n)));
  const graph = createGraph(n, edges);
  return dfs(graph);
}

function createGraph(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  edges.forEach(([a, b]) => {
    const idxA = a - 1;
    const idxB = b - 1;
    graph[idxA].push(b);
    graph[idxB].push(a);
  });

  return graph;
}

function dfs(graph) {
  const stack = [1];
  const visited = Array.from({ length: graph.length }, () => false);

  while (stack.length > 0) {
    const node = stack.pop();
    const head = node - 1;

    if (!visited[head])  {
      visited[head] = true;
      const adjacents = graph[head];
      stack.push(...adjacents);
    }
  };

  return visited.filter((is) => is).length - 1;
}

function solveRecursive(input) {
  const [n, m, ...edges] = input.split('\n').map((line, i) => i < 2 ? Number(line): line.split(' ').map((n) => Number(n)));
  const graph = createGraph(n, edges);
  const visited = Array.from({ length: n }, () => false);

  const count = dfsRecursive(1, graph, visited);
  return count - 1;
}

function dfsRecursive(id, graph, visited) {
  const idx = id - 1;
  if (visited[idx]) return 0;
  visited[idx] = true;
  const adjacents = graph[idx];
  return adjacents.reduce((sum, adjacent) => sum + dfsRecursive(adjacent, graph, visited), 1);
}

function solveBFS(input) {
  const [n, m, ...edges] = input.split('\n').map((line, i) => i < 2 ? Number(line): line.split(' ').map((n) => Number(n)));
  const graph = createGraph(n, edges);
  const visited = Array.from({ length: n }, () => false);

  const count = bfs(graph, visited);
  return count - 1;
}

function bfs(graph, visited) {
  const queue = [1];

  while (queue.length > 0) {
    const node = queue.shift();
    const head = node - 1;
    if (!visited[head]) {
      visited[head] = true;
      const adjacents = graph[head];
      queue.push(...adjacents);
    };
  };

  return visited.filter((is) => is).length;
}


/* 
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim();
  const result = solve(input);
  console.log(result);
 */

module.exports = [ solve, solveRecursive, solveBFS ];
