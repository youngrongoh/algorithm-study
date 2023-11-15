/**
 * @see https://www.acmicpc.net/problem/1260
 * @description
 * # Title: DFS와 BFS
 * ## Problem
 * 첫째 줄에 DFS를 수행한 결과, 다음 줄에는 BFS를 수행한 결과를 출력
 * (V부터 방문된 점을 순서대로 출력)
 * ## Input
 * - 첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V
 * - 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호
 * (어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향)
 * ## Condition
 * - 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문
 * - 더 이상 방문할 수 있는 점이 없는 경우 종료
 * ## Memo
 */

function solve(input) {
  const [[n, m, v], ...edges] = input.split('\n').map((line) => line.split(' ').map((n) => Number(n)));
  return dfs(v, createGraph(n, edges)) + '\n' + bfs(v, createGraph(n, edges));
}

function solveDFSRecursive(input) {
  const [[n, m, v], ...edges] = input.split('\n').map((line) => line.split(' ').map((n) => Number(n)));

  return dfsRecursive(v, createGraph(n, edges)) + '\n' + bfs(v, createGraph(n, edges));
}

function createGraph(n, edges) {
  const nodes = new Array(n).fill(null).map(() => ({ id: -1, marked: false, adjacents: [] }));
  edges.forEach(([a, b]) => {
    const nodeA = nodes[a - 1];
    const nodeB = nodes[b - 1];
    nodeA.id = a;
    nodeB.id = b;
    nodeA.adjacents.push(nodeB);
    nodeB.adjacents.push(nodeA);
  });

  const graph = nodes.reduce((graph, node, i) => {
    graph[i + 1] = node;
    node.id = i + 1;
    node.adjacents = node.adjacents.sort((a, b) => a.id - b.id);
    return graph;
  }, {});

  return graph;
}

function dfs(id, graph) {
  let result = '';
  const start = graph[id];
  const stack = [start];
  while (stack.length > 0) {
    const node = stack.pop();
    if (node.marked) continue;
    result += node.id + ' ';
    node.marked = true;

    node.adjacents.reverse().forEach((node) => stack.push(node));
  };

  return result.trim();
};

function dfsRecursive(id, graph) {
  const head = graph[id];
  if (head.marked) return;
  let result = id.toString();
  head.marked = true;
  
  for (let i = 0; i < head.adjacents.length; i++) {
    const node = head.adjacents[i];
    const childResult = dfsRecursive(node.id, graph);
    if (childResult) {
      result += ' ' + childResult;
    };
  }

  return result;
}

function bfs(id, graph) {
  let result = '';
  const start = graph[id];
  const queue = [start];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.marked) continue;
    result += ' ' + node.id;
    node.marked = true;
    
    node.adjacents.forEach((node) => {
      if (node.marked) return;
      queue.push(node);
    });
  };

  return result.trim();
}

/* 
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim();
  const result = solve(input);
  console.log(result);
 */

module.exports = [ solve, solveDFSRecursive ];
