// 스택, 문자열
// 단어순서 뒤집기 : https://www.acmicpc.net/problem/12605
const [numberOfTest, ...words] = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split('\n');

function createWordStack(word) {
  const stack = [];
  const wordLength = word.length;
  for (let i = 0; i < wordLength; i++) {
    stack.push(word[i]);
  }
  return stack;
};

function getPoppedStack(stack) {
  const popped = [];
  const stackLength = stack.length;
  for (let i = 0; i < stackLength; i++) {
    popped.push(stack.pop());
  }
  return popped;
};

function solution() {
  for (let i = 0; i < numberOfTest; i++) {
    const word = words[i].split(' ');
    const stack = createWordStack(word); // [ 'this', 'is', 'a', 'test' ]
    const popped = getPoppedStack(stack).join(' ');// test a is this
    console.log(`Case #${i + 1}: ${popped}`);
  }
};
solution();

// 함수 중간에 console.log 넣지말아라 -> 결과값 구하는건 solution에서 ..
// stack 자료구조는 push, pop, peek?만 가능
// stack !== array -> index로 조회하면 안된다
