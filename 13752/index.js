const fs = require('fs');
const input = fs.readFileSync('./input2.txt').toString().split('\n');
const numberOfLine = parseInt(input[0]); // 줄 수
const eachNumberArray = [];

for (let i = 1; i < input.length; i++) {
  eachNumberArray.push(parseInt(input[i]))
};

function solution(numberOfLine, eachNumberArray) {
  for(let i = 0; i < numberOfLine; i++) {
    console.log('='.repeat(eachNumberArray[i]));
  }
};

solution(numberOfLine, eachNumberArray);

// for과 if 위주로 사용해라