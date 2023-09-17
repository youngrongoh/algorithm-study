/**
 * @see https://www.acmicpc.net/problem/11399
 * @description
] * # Title: ATM
 * ## Condition
 * ## Problem
 * 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 출력
 * ## Input
 * 첫째 줄에 사람의 수 N(1 ≤ N ≤ 1,000)
 * 둘째 줄에는 각 사람이 돈을 인출하는데 걸리는 시간 Pi(1 ≤ Pi ≤ 1,000)
 * ## Memo
 * - Sn = P0 + P1 + ... + Pn
 * - S(P0) = P0
 * - R = S(P0) + S(P1) + ... + S(Pn)
 *     = P0 + (P0 + P1) + .... + (P0 + P1 + ... + Pn)
 *     = n*P0 + (n-1)*P1 + .... + Pn
 * - R이 최소값이 되려면 P0 < P1 < ... < Pn
 *   (가장 많이 곱해지는 수가 작을수록, 가장 적게 곱해지는 수가 클수록 R이 작아짐)
 *   => 오름차순 정렬
 */

const func = (input) => {
  const [n, times] = input.split('\n').map((line, i) => i === 0 ? Number(line) : line.split(' ').map(n => Number(n)));
  const sortedByAsc = times.sort((a, b) => a - b);

  return sortedByAsc.reduce((sum, _, i) => sumPrevNums(sortedByAsc, i) + sum, 0);
};

const sumPrevNums = (nums, i) => i > 0 ? sumPrevNums(nums, i - 1) + nums[i] : nums[0];

/* 
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim();
  const result = solve(input);
  console.log(result);

  function solve(input) {

  }
 */

module.exports = [ func ];
