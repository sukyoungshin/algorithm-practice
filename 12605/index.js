// 단어순서 뒤집기 (스택): https://www.acmicpc.net/problem/12605 

const [ numberOfTest, ...words ] = require('fs')
  .readFileSync('C:\\Users\\aaa\\codingTest\\12605\\input1.txt')
  .toString()
  .split('\n');

function getReverseWord(paragraph) {
  const word = paragraph.split(' '); // ['this', 'is', 'a', 'test']
  const popped = getPoppedWord(word).join(' '); // test a is this
  return popped;
};

function getPoppedWord(word) {
  const array = [];
  const wordLength = word.length; // <-- 고정
  for (let i = 0; i < wordLength; i++) {
    array.push(word.pop());
  }
  return array;
};

function solution() {
  for (let i = 0; i < numberOfTest; i++) {
    const word = words[i];
    console.log(`Case #${i+1}: ${getReverseWord(word)}`);
  }
};

solution();