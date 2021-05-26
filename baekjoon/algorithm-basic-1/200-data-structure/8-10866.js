/**
 * @see https://www.acmicpc.net/problem/10866
 * @description
 * # Title: 덱
 * # Condition
 * push_front X: 정수 X를 덱의 앞에 삽입
 * push_back X: 정수 X를 덱의 뒤에 삽입
 * pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력
 *            덱에 들어있는 정수가 없는 경우에는 -1을 출력
 * pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력
 *            덱에 들어있는 정수가 없는 경우에는 -1을 출력
 * size: 덱에 들어있는 정수의 개수를 출력
 * empty: 덱이 비어있으면 1을, 아니면 0을 출력
 * front: 덱의 가장 앞에 있는 정수를 출력
 *        만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력
 * back: 덱의 가장 뒤에 있는 정수를 출력
 *        덱에 들어있는 정수가 없는 경우에는 -1을 출력
 * # Problem
 * 정수를 저장하는 덱(Deque)를 구현한 다음, 입력으로 주어지는 명령을 처리
 * # Input
 * 첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)
 * 둘째 줄부터 N개의 줄에는 명령
 * 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같음
 * 문제에 나와있지 않은 명령이 주어지는 경우는 없음
 * # Memo
 * @see
 * @arguments
 * Case 1
 * `15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front`
 * Case 2
 * `22
front
back
pop_front
pop_back
push_front 1
front
pop_back
push_back 2
back
pop_front
push_front 10
push_front 333
front
back
pop_back
pop_back
push_back 20
push_back 1234
front
back
pop_back
pop_back`
 */

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.root = null;
    this.head = null;
    this.count = 0;
  }

  push_front = (data) => {
    const node = new Node(data);
    if (this.root) {
      this.root.prev = node;
      node.next = this.root;
      this.root = node;
    } else {
      this.root = node;
      this.head = this.root;
    }
    this.count++;
  };

  push_back = (data) => {
    const node = new Node(data);
    if (this.root) {
      this.head.next = node;
      node.prev = this.head;
      this.head = node;
    } else {
      this.root = node;
      this.head = this.root;
    }
    this.count++;
  };

  pop_front = () => {
    if (!this.root) return -1;

    const remove = this.root;

    this.root = this.root.next;
    if (this.root) {
      this.root.prev = null;
    } else {
      this.head = this.root;
    }

    this.count--;

    return remove.value;
  };

  pop_back = () => {
    if (!this.root) return -1;

    const remove = this.head;

    this.head = this.head.prev;
    if (this.head) {
      this.head.next = null;
    } else {
      this.root = this.head;
    }

    this.count--;

    return remove.value;
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
  const deque = new Deque();

  let result = '';

  commands.forEach((command) => {
    const [cmd, option] = command.split(' ');

    if (option) {
      deque[cmd](option);
    } else {
      result += String(deque[cmd]()) + '\n';
    }
  });

  return result;
}

const sample = [
  `15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front`,
  `22
front
back
pop_front
pop_back
push_front 1
front
pop_back
push_back 2
back
pop_front
push_front 10
push_front 333
front
back
pop_back
pop_back
push_back 20
push_back 1234
front
back
pop_back
pop_back`,
];

sample.forEach((input) => {
  const [, ...commands] = input.split('\n');

  const result = executeCommands(commands);
  console.log(result);
});
