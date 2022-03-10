// 스택 
// 괄호 끼워넣기 https://www.acmicpc.net/problem/11899
const parenthesisString = require('fs')
.readFileSync('./input1.txt')
.toString()
.trim()
.split('');

function solution() {
  const stack = []; // ), (
  
  for (let i = 0; i < parenthesisString.length; i++) {
    if (parenthesisString[i] === '(') {
      stack.push(parenthesisString[i]);
      continue;      
    } 

    const peek = stack[stack.length-1];
    if (peek === '(') {
      stack.pop();
    } else {
      stack.push(parenthesisString[i]);
    }
  }

  return stack.length;
};

console.log(solution());