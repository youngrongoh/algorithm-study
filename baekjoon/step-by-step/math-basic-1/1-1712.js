const input = [`1000 70 170`, `3 2 1`];

function solve(a, b, c) {
  if (c <= b) {
    console.log(-1);
    return;
  }
  let point = +Math.floor(a / (c - b) + 1);
  console.log(point);
}

input.forEach((data) => {
  const arr = data
    .trim()
    .split(' ')
    .map((v) => +v);
  solve(...arr);
});
