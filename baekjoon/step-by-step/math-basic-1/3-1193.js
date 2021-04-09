/*
1+2+3+4+5+...+i

n <= 1 -> i=1
n <= 1+2 -> i=2
n <= 1+2+3 -> i=3
...
n <= 1+2+3+...+i
n <= (i+1)*i/2

*/

function solve(n) {
  let i = 1;
  let maxWithinLayer = 1;
  while (n > maxWithinLayer) {
    i++;
    maxWithinLayer = ((i + 1) * i) / 2;
  }
  let x = 1;
  let y = i;
  let comparedNumber = maxWithinLayer;
  while (n < comparedNumber) {
    x += 1;
    y -= 1;
    comparedNumber--;
  }
  if (i % 2 !== 0) {
    return `${x}/${y}`;
  } else {
    return `${y}/${x}`;
  }
}

const result = solve(7);
console.log(result);
