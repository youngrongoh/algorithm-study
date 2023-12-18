/**
 * @see https://www.acmicpc.net/problem/1012
 * @description
 * # Title: 유기농 배추
 * ## Problem
 * 각 테스트 케이스에 대해 필요한 최소의 배추흰지렁이 마리 수를 출력
 * ## Input
 * 첫 줄에 테스트 케이스의 개수 T
 * 그 다음 줄부터 각각의 테스트 케이스에 대해 첫째 줄에는 배추를 심은 배추밭의 가로길이 M(1 ≤ M ≤ 50), 세로길이 N(1 ≤ N ≤ 50), 배추가 심어져 있는 위치의 개수 K(1 ≤ K ≤ 2500)
 * 그 다음 K줄에는 배추의 위치 X(0 ≤ X ≤ M-1), Y(0 ≤ Y ≤ N-1)
 * ## Condition
 * 배추흰지렁이는 해충 방지 효과가 있다
 * 어떤 배추에 배추흰지렁이가 한 마리라도 살고 있으면 이 지렁이는 상하좌우 네 방향의 다른 배추로 이동할 수 있어, 그 배추들 역시 해충으로부터 보호받을 수 있다
 * 두 배추의 위치가 같은 경우는 없다
 * ## Memo
 */

function solve(input) {
  const cases = produceCasesFromInput(input);

  // 케이스 별 카운트 산출
  const counts = cases.reduce((counts, [[m, n], ...cabbages]) => {
    let count = 0;

    const field = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
    cabbages.forEach(([x, y]) => field[y][x] = 1);

    // dfs를 통해 연결된 노드 그래프 초기화
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const stack = [[i, j]];

        // 그래프 카운팅
        if (field[i][j] === 1) {
          count++;
        };

        while (stack.length > 0) {
          const [i, j] = stack.pop();
          const isVisited = field[i][j];
          if (isVisited === 0) continue;
          field[i][j] = 0;
          // 인접한 노드 탐색 준비
          const adjacents = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]].filter(([y, x]) => typeof field[y]?.[x] === 'number');
          adjacents.forEach((adjacent) => {
            stack.push(adjacent);
          });
        };
      };
    };

    counts.push(count);
    return counts;
  }, []);

  return counts.join('\n');
}

function solveByRecursiveDFS(input) {
  const counts = [];
  const cases = produceCasesFromInput(input);
  for (const [[m, n], ...cabbages] of cases) {
    const graph = Array.from({ length: n }, () => Array.from({ length: m }, () => ({ isCabbage: false, isVisited: false})));
    cabbages.forEach(([x, y]) => graph[y][x].isCabbage = true);
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const isLinked = dfs([j, i], graph);
        if (isLinked) count++;
      }
    }
    counts.push(count);
  }

  function dfs([x, y], graph) {
    const node = graph[y][x];
    if (node.isVisited) return false;
    node.isVisited = true;

    if (!node.isCabbage) return false;
    const adjacents = [[x, y - 1], [x, y + 1], [x - 1, y], [x + 1, y]].filter(([x, y]) => x >= 0 && x < graph[0].length && y >= 0 && y < graph.length);
    for (const [x, y] of adjacents) {
      const adjacent = graph[y][x];
      if (!adjacent.isCabbage) continue;
      dfs([x, y], graph);
    }
    return true;
  }

  return counts.join('\n');
};

function solveByBFS(input) {
  const cases = produceCasesFromInput(input);
  const counts = [];
  for (const [[m, n], ...cabbages] of cases) {
    const graph = Array.from({ length: n }, () => Array.from({ length: m }, () => ({ isCabbage: false, isVisited: false })));
    cabbages.forEach(([x, y]) => graph[y][x].isCabbage = true);

    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (graph[i][j].isCabbage && !graph[i][j].isVisited) {
          count++;
        }
        
        const queue = [[j, i]];
        while (queue.length > 0) {
          const [x, y] = queue.splice(0, 1)[0];
          const node = graph[y][x];
          if (node.isVisited) continue;
          node.isVisited = true;

          if (node.isCabbage) {
            const adjacents = [[x, y - 1], [x, y + 1], [x - 1, y], [x + 1, y]].filter(([x, y]) => x >= 0 && x < m && y >= 0 && y < n);
            queue.push(...adjacents);
          }
        }
      }
    }
    counts.push(count);
  }
  return counts.join('\n');
}

function produceCasesFromInput(input) {
  const [_, ...splitedLines] = input.split('\n').map((line) => line.split(' ').map((v) => parseInt(v, 10)));

  /**
   * 케이스별 분리
   * @var cases
   * @type {Array.<Case>}
   * @typedef Case
   * @type {[farm: [M: number, N: number, K: number], ...cabbages: Array.<[X: number, Y: number]>]}
   */
  const cases = splitedLines.reduce((acc, splited) => {
    if (splited.length === 3) acc.push([splited]);
    else acc.at(-1).push(splited);
    return acc;
  }, []);
  return cases;
}

/* 
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim();
  const result = solve(input);
  console.log(result);
 */

module.exports = [ solve, solveByRecursiveDFS, solveByBFS ];
