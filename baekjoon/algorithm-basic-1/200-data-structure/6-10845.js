/**
 * @see https://www.acmicpc.net/problem/10845
 * @description
 * # Title: 큐
 * # Condition
 * 큐의 여섯가지 명령
 * push X: 정수 X를 큐에 넣는 연산
 * pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력
 * size: 큐에 들어있는 정수의 개수를 출력
 * empty: 큐가 비어있으면 1, 아니면 0을 출력
 * front: 큐의 가장 앞에 있는 정수를 출력
 *        만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력
 * back: 큐의 가장 뒤에 있는 정수를 출력
 *        만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력
 * # Problem
 * 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리
 * # Input
 * 첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)
 * 둘째 줄부터 N개의 줄에는 명령이 하나씩
 * (주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같음)
 * 문제에 나와있지 않은 명령이 주어지는 경우는 없음
 * # Memo
 * @see
 * @arguments
 * Case 1
 * `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`
 */

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.root = null;
    this.head = null;
    this.count = 0;
  }

  push = (value) => {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      this.head = node;
    } else {
      this.head.next = node;
      this.head = node;
    }
    this.count++;
  };

  pop = () => {
    let result;
    if (this.root) {
      result = this.root.value;
      this.root = this.root.next;
      if (!this.root) this.head = null;
      this.count--;
    } else {
      result = -1;
    }

    return result;
  };

  size = () => {
    return this.count;
  };

  empty = () => {
    return this.root ? 0 : 1;
  };

  front = () => {
    return this.root ? this.root.value : -1;
  };

  back = () => {
    return this.head ? this.head.value : -1;
  };
}

function executeCommands(commands) {
  const queue = new Queue();

  let results = '';
  commands.forEach((command) => {
    const [cmd, option] = command.split(' ');

    let result = '';
    if (option) {
      queue[cmd](option);
    } else {
      result = queue[cmd]();
      results += result + '\n';
    }
  });

  return results;
}

const sample = [
  `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`,
];

sample.forEach((input) => {
  const [, ...commands] = input.split('\n');

  const result = executeCommands(commands);
  console.log(result);
});
