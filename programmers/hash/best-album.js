/**
 * @see https://programmers.co.kr/learn/courses/30/lessons/42579
 * @description
 * # Title: 베스트 앨범
 * # Condition
 * 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시
 * 노래는 고유 번호로 구분
 * 속한 노래가 많이 재생된 장르를 먼저 수록
 * 장르 내에서 많이 재생된 노래를 먼저 수록
 * 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록
 * genres[i]는 고유번호가 i인 노래의 장르
 * plays[i]는 고유번호가 i인 노래가 재생된 횟수
 * genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하
 * 장르 종류는 100개 미만
 * 장르에 속한 곡이 하나라면, 하나의 곡만 선택
 * 모든 장르는 재생된 횟수가 다름
 * # Problem
 * 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return
 * # Input
 * 장르를 나타내는 문자열 배열 genres
 * 노래별 재생 횟수를 나타내는 정수 배열 plays
 * # Memo
 * @see
 * @arguments
 * ## Case 1
 * genres: ["classic", "pop", "classic", "classic", "pop"]
 * plays: [500, 600, 150, 800, 2500]
 */

function solution(genres, plays) {
  const table = genres.reduce((obj, genre, i) => {
    if (obj[genre]) {
      obj[genre].total += plays[i];
      obj[genre].songs.push([i, plays[i]]);
    } else {
      obj[genre] = { songs: [[i, plays[i]]], total: plays[i] };
    }
    return obj;
  }, {});

  const sorted = Object.values(table).sort((a, b) => b.total - a.total);
  const mapped = sorted.map((genre) => genre.songs.sort((a, b) => b[1] - a[1]));

  return mapped.reduce((best, genre) => {
    if (genre.length > 1) {
      best.push(genre[0][0], genre[1][0]);
    } else {
      best.push(genre[0][0]);
    }
    return best;
  }, []);
}

const sample = [
  [
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500],
  ],
  [
    ['a', 'b', 'c', 'd', 'e'],
    [500, 600, 150, 800, 2500],
  ],
  [
    ['a', 'a', 'a', 'a', 'a'],
    [500, 600, 150, 800, 2500],
  ],
  [
    Array(100000)
      .fill('')
      .map((_, i) => ['a', 'b', 'c', 'd', 'e'][i % 5]),
    Array(100000)
      .fill(1)
      .map((v, i) => v + i),
  ],
];

sample.forEach((input) => {
  const genres = input.shift();
  const plays = input.shift();

  const result = solution(genres, plays);
  console.log(result);
});
