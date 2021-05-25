/**
 * @see https://www.acmicpc.net/problem/1406
 * @description
 * # Title: 에디터
 * # Condition
 * 영어 소문자만을 기록할 수 있는 편집기
 * 최대 600,000글자까지 입력
 * 커서는 문장의 맨 앞(첫 번째 문자의 왼쪽), 
 * 문장의 맨 뒤(마지막 문자의 오른쪽), 
 * 또는 문장 중간 임의의 곳(모든 연속된 두 문자 사이)에 위치 가능
 * 길이가 L인 문자열이 현재 편집기에 입력되어 있으면, 커서가 위치할 수 있는 곳은 L+1가지
 * 편집기가 지원하는 명령어
 * L - 커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시)
 * D - 커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시)
 * B - 커서 왼쪽에 있는 문자를 삭제 (커서가 문장의 맨 앞이면 무시)
 * P $ - $라는 문자를 커서 왼쪽에 추가
 * 명령어가 수행되기 전에 커서는 문장의 맨 뒤에 위치
 * # Problem
 * 첫째 줄에 모든 명령어를 수행하고 난 후 편집기에 입력되어 있는 문자열을 출력
 * # Input
 * 첫째 줄에는 초기에 편집기에 입력되어 있는 문자열
 * (문자열은 길이가 N이고, 영어 소문자로만 구성, 길이는 100,000 이하)
 * 둘째 줄에는 입력할 명령어의 개수를 나타내는 정수 M(1 ≤ M ≤ 500,000)
 * 셋째 줄부터 M개의 줄에 걸쳐 입력할 명령어가 순서대로
 * (명령어는 위의 네 가지 중 하나의 형태)
 * # Memo
 * @see
 * @arguments
 * Case 1
 * `abcd
3
P x
L
P y`
 * Case 2
 *`abc
9
L
L
L
L
L
P x
L
B
P y`
 * Case 3
 *`dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`
 */

/* 2021.5.25 실패 -> 메모리 초과
function editWithCommands(str, commands) {
  // 문자열 배열로 변환
  let strArr = [...str];
  // 커서 위치 초기화
  let cursor = strArr.length;

  // 명령어 수행
  commands.forEach(command => {
    const [cmd, option] = command.split(' ');

    switch (cmd) {
      case 'L':
        if (cursor > 0) cursor -= 1;
        break;
      case 'D':
        if (cursor < strArr.length) cursor += 1;
        break;
      case 'B':
        if (cursor === 0) break;
        strArr = strArr.filter((_, i) => i !== cursor - 1);
        cursor -= 1;
        break;
      case 'P':
        strArr.splice(cursor, 0, option);
        cursor += 1;
        break;
      default:
        throw new Error(`Invalid command: ${cmd}`);
    }
  })

  return strArr.join('');
}
 */

function editWithCommands(str, commands) {
  const left = [...str];
  const right = [];

  commands.forEach((command) => {
    const [cmd, option] = command.split(' ');

    switch (cmd) {
      case 'L':
        if (left.length) {
          right.push(left.pop());
        }
        break;
      case 'D':
        if (right.length) {
          left.push(right.pop());
        }
        break;
      case 'B':
        if (left.length) left.pop();
        break;
      case 'P':
        left.push(option);
        break;
      default:
        throw new Error(`Invalid command: ${command}`);
    }
  });

  return left.join('') + right.reverse().join('');
}

const sample = [
  `abcd
3
P x
L
P y`,
  `abc
9
L
L
L
L
L
P x
L
B
P y`,
  `dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`,
];

sample.forEach((input) => {
  const [str, _, ...commands] = input.split('\n');

  const edited = editWithCommands(str, commands);
  console.log(edited);
});
