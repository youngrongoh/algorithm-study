/*
[1, 7, 19, 37, ...]
[1, 6, 12, 18, 24, ...]
n = 1 + 6*1 + 6*2 + 6*3 + ... + 6*x
n = 1 + 6(1+2+3+...+x)
n = 1+6*(x/2*(1+x))
n <= 1 + 3 * x * (1+x);
 */
function solve(n) {
  let count;
  if (n === 1) {
    count = 1;
  } else {
    let limit = 1;
    for (let i = 1; n > limit; i++) {
      limit = 3 * i * (i + 1) + 1;
      count = i + 1;
    }
  }
  return count;
}

console.log(solve(13));
