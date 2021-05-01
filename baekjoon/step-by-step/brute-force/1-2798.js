/**
 * @see https://www.acmicpc.net/problem/2798
 * @description
 * # Title: 블랙잭
 * # Condition
 * 카드의 합이 21을 넘지 않는 한도 내에서, 카드의 합을 최대한 크게 만드는 게임
 * 각 카드에는 양의 정수
 * N장의 카드 중에서 3장의 카드를 고름
 * 카드의 합은 M을 넘지 않으면서 M과 최대한 가깝게 만들어야 함
 * # Problem
 * 첫째 줄에 M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 출력
 * # Input
 * 첫째 줄에 카드의 개수 N(3 ≤ N ≤ 100)과 M(10 ≤ M ≤ 300,000)
 * 둘째 줄에는 카드에 쓰여 있는 수(100,000을 넘지 않는 양의 정수)
 * # Memo
 * brute-force는 "난폭한 힘, 폭력"이라는 뜻
 * 이론적으로 가능한 모든 경우의 수를 다 검색해 보는 것
 * 항상 정확도 100%를 보장
 * 그냥 무식하게 때려박는 건 아니고 특정 규칙에 따라 우선순위를 두고 하기도 함
 * 브루트 포스 방법에는 문제의 복잡도(Complexity)에 매우 민감하다는 치명적인 단점
 * 문제의 규모가 현재의 자원으로 충분히 커버가 가능한 경우에만 쓰이고, 대부분은 동적 계획법 등으로 많이 우회하는 편
 * @see https://namu.wiki/w/%EB%B8%8C%EB%A3%A8%ED%8A%B8%20%ED%8F%AC%EC%8A%A4
 * @arguments
 * `5 21
5 6 7 8 9`
 * `10 500
93 181 245 214 315 36 185 138 216 295`
 */

function findCloseSum(m, cards) {
  if (cards.length === 3) return cards.reduce((sum, card) => sum + cards, 0);

  let max = 0;
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        const sum = cards[i] + cards[j] + cards[k];

        if (sum <= m && sum >= max) max = sum;
      }
    }
  }

  return max;
}

const sample = [
  `5 21
5 6 7 8 9`,
  `10 500
93 181 245 214 315 36 185 138 216 295`,
];

sample.forEach((input) => {
  const splited = input.split('\n');
  const countAndM = splited[0].split(' ');
  const cardsStr = splited[1].split(' ');

  const m = Number(countAndM[1]);
  const cards = cardsStr.map((str) => Number(str));

  const closeSum = findCloseSum(m, cards);

  console.log(closeSum);
});
