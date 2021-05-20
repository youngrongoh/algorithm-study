/**
 * @see https://www.acmicpc.net/problem/10828
 * @description
 * # Title: 스택
 * # Condition
 * 정수를 저장하는 스택을 구현
 * 명령은 총 다섯 가지
 * push X: 정수 X를 스택에 넣는 연산
 * pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력
 *      스택에 들어있는 정수가 없는 경우에는 -1을 출력
 * size: 스택에 들어있는 정수의 개수를 출력
 * empty: 스택이 비어있으면 1, 아니면 0을 출력
 * top: 스택의 가장 위에 있는 정수를 출력
 *      스택에 들어있는 정수가 없는 경우에는 -1을 출력
 * # Problem
 * # Input
 * # Memo
 * @see 
 * @arguments
 * `14
push 1
push 2
top
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
top`
 */

class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.count = 0
        this.head = null;
    }

    push = (data) => {
        const node = new Node(data);
        
        if (this.head) {
            node.next = this.head;
        }
        
        this.head = node;
        this.count++;
        return;
    }
    
    pop = () => {
        if (!this.head) {
            return -1;
        }
        
        const remove = this.head;
        this.head = this.head.next;
        this.count--;
        return remove.value;
    }
    
    size = () => {
        return this.count;
    }
    
    empty = () => {
        return this.count > 0 ? 0 : 1;
    }
    
    top = () => {
        return this.count > 0 ? this.head.value : -1;
    }
}

const sample = [`14
push 1
push 2
top
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
top`];

sample.forEach(input => {
    const [, ...commands] = input.split('\n');
    
    const stack = new Stack();
    
    let logs = '';
    commands.forEach(line => {
        const [cmd, option] = line.split(' ');

        let log;
        if (option !== undefined) {
            log = stack[cmd](option);
        } else {
            log = stack[cmd]();
        }

        if (log === undefined) return;
        logs += log + '\n';
    })
    
    console.log(logs);
})
