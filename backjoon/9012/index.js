// 스택
// 괄호 https://www.acmicpc.net/problem/9012
const [ testCase, ...parenthesisStrings ] = require('fs')
.readFileSync('./input2.txt')
.toString()
.split('\n');

const YES = 'YES', NO = 'NO';

function getEachString(each) {
  const stack = [];
  for (let i = 0; i < each.length; i++) {
    stack.push(each[i]);
  }
  return stack;
};

function getPoppedStack(eachStack) {
  const stack = [];
  for (let i = 0; i < eachStack.length; i++) {
    if (eachStack[i] === ')') {
      const popped = stack.pop();
      if (!popped) return NO;
    } else {
      stack.push(eachStack[i]);
    }
  }
  return stack;
};

function isEmpty(stack) {
  return stack.length === 0 ? YES : NO;
}

function solution() {
  for (let i = 0; i < testCase; i++) {
    const each = parenthesisStrings[i];
    const eachStack = getEachString(each);
    const poppedStack = getPoppedStack(eachStack);
    const result = isEmpty(poppedStack);
    console.log(result);
  }
};

solution();