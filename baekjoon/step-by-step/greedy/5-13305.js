/**
 * @see https://www.acmicpc.net/problem/13305
 * @description
 * # Title: 주유소
 * ## Condition
 * 도시들은 일직선 도로 위에 있다
 * 인접한 두 도시 사이의 도로들은 서로 길이가 다를 수 있다
 * 처음 출발할 때 자동차에는 기름이 없어서 주유소에서 기름을 넣고 출발하여야 한다(기름통의 크기는 무제한)
 * 1km마다 1리터의 기름을 사용
 * 각 도시에는 단 하나의 주유소가 있으며, 도시 마다 주유소의 리터당 가격은 다를 수 있다
 * 가격의 단위는 원
 * ## SubTask
 * 1. 모든 주유소의 리터당 가격은 1원
 * 2. 2 ≤ N ≤ 1,000, 제일 왼쪽 도시부터 제일 오른쪽 도시까지의 거리는 최대 10,000, 리터 당 가격은 최대 10,000
 * 3. 원래의 제약조건 이외에 아무 제약조건이 없다
 * ## Problem
 * 제일 왼쪽 도시에서 제일 오른쪽 도시로 가는 최소 비용을 출력
 * ## Input
 * 첫 번째 줄에는 도시의 개수를 나타내는 정수 N(2 ≤ N ≤ 1,000,000)
 * 두 번째 줄에는 인접한 두 도시를 연결하는 도로의 길이 L(제일 왼쪽 도로부터 N-1개의 자연수, 1 <= Sum(...Ln-1) <= 1,000,000,000)
 * 세 번째 줄에는 주유소의 리터당 가격 P(제일 왼쪽 도시부터 순서대로 N개의 자연수, 1 <= P <= 1,000,000,000)
 * ## Memo
 */

const solve = (input) => {
  const [n, distances, prices] = input.split('\n').map((line, i) => i === 0 ? Number(line): line.split(' ').map((n) => BigInt(n)));

  let currentPrice = prices[0];
  let total = BigInt(0);
  for (let i = 0; i < n - 1; i++) {
    total += currentPrice * distances[i];
    const nextPrice = prices[i + 1];
    if (nextPrice < currentPrice) {
      currentPrice = nextPrice;
    };
  };

  return total.toString();
};

/* 
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim();
  const result = solve(input);
  console.log(result);

  function solve(input) {

  }
 */

module.exports = [ solve ];
