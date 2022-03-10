// https://www.acmicpc.net/problem/10828

const [_, ...input] = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' '));

const COMMAND = {
  PUSH : 'push',
  POP : 'pop',
  SIZE : 'size',
  EMPTY : 'empty',
  TOP : 'top',
};

function solution() {
  let answer = '';
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    const command = input[i][0];
    const number = Number(input[i][1]);

    switch (command) {
      case COMMAND.PUSH:        
        if (!number) return;
        stack.push(number);
        break;
      case COMMAND.POP:
        answer += (stack.length !== 0 ? stack.pop() : -1) + '\n';
        break;
      case COMMAND.SIZE:
        answer += (stack.length) + '\n';
        break;
      case COMMAND.EMPTY:
        answer += (stack.length ? 0 : 1) + '\n';
        break;
      case COMMAND.TOP:
        answer += (stack.length !== 0 ? Number(stack[stack.length - 1]) : -1) + '\n';
        break;
      default:
        console.log('error');
        break;
    }
  }
  return answer.trim();
};

console.log(solution());