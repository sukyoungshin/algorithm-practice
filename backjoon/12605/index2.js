// 스택구현하기 -> 나중에 다시

class Stack {
  
	constructor() {
		this.stack = [];
	}

	// 반환값: 스택의 맨 마지막 값
	pop() {
    const THIS = this.stack;
    const RESULT = THIS[THIS.length - 1];
    if (THIS.length === 0) return;
    THIS.length = THIS.length - 1; // pop()
    return RESULT;
	}

	// 반환값: 배열의 길이
	push(value) {
    const THIS = this.stack;
    THIS[THIS.length] = value; // <-
    return THIS.length;
	}

  // 반환값: 스택의 맨 마지막 값
	pick() {
    const THIS = this.stack;
    return THIS[THIS.length - 1];
	}
};

const log = console.log;
const stack = new Stack();
log(stack.push(3)) // 1
log(stack.push(2)) // 2
log(stack.push(1)) // 3

log(stack.pop()) // 1
log(stack.push(4)) // 3

log(stack.pop()) // 4
log(stack.pop()) // 2
log(stack.pop()) // 3
log(stack.pop()) // undefined