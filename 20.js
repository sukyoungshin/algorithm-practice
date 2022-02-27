// 스택 https://programmers.co.kr/learn/courses/30/lessons/12909

const s1 = "()()";
const s2 = "(())()";
const s3 = ")()(";
const s4 = "(()(";

function getEachStack(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  return stack;
};

function calPopStack(eachStack) {
  const stack = []; // "(", "("
  for (let i = 0; i < eachStack.length; i++) {
    if (eachStack[i] === ')') {
      const popped = stack.pop();
      if (!popped) return false;
    } else {
      stack.push(eachStack[i]);
    }
  }
  return stack;
};

function isEmpty(stack) {
  return stack.length === 0 ? true : false;
};

function solution(s) {
  const eachStack = getEachStack(s); // "(", "(", ")", ("
  const popStack = calPopStack(eachStack); // [ '(', '(' ]
  const result = isEmpty(popStack);
  return result;
};

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));