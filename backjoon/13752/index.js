const fs = require('fs');
const input = fs.readFileSync('./input2.txt').toString().split('\n');
const numberOfLine = parseInt(input[0]); // 줄 수

function createArray() {
  const array = [];
  for (let i = 1; i < input.length; i++) {
    array.push(parseInt(input[i]));
  };
  return array;
};

function repeatPrint(eachNumberArray) {
  for(let i = 0; i < numberOfLine; i++) {
    console.log('='.repeat(eachNumberArray[i]));
  }
};

function solution() {
  const eachNumberArray = createArray();
  return repeatPrint(eachNumberArray);
};

solution();

// for과 if 위주로 사용해라
// for of