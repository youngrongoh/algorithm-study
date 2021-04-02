/* 
height = v
day -> +a
night -> -b
n일?

1일 -> a-b 올라감
v = a + (n-1)(-b + a)
v = a + (n-1)*(-b) + (n-1)*a
v = n*(-b) + b + n*a
(v-b)/(a-b) = n

*/
/* 시간초과
function solve(a, b, v) {
  let height = 0;
  let day = 1;
  height += a;
  while (height < v) {
    height -= b;
    day++;
    height += a;
  }
  return day;
} 
*/

function solve(a, b, v) {
  return Math.ceil((v - b) / (a - b)); // 소수점이 나오는 경우 하루가 더 필요한 것이므로 올림을 해줘야 한다!
}

const input = '7 3 9'; // (v - b) / (a - b) = 1.5 -> 올림!
const inputArr = input.split(' ').map((str) => +str);
const result = solve(...inputArr);
console.log(result);
