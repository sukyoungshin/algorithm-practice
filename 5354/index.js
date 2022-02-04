// https://www.acmicpc.net/problem/5354

const inputs = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .trim()
  .split('\n'); 
const testCase = parseInt(inputs[0]); // 3  
inputs.shift();  
const sizeOfJbox = inputs.map(v => parseInt(v)) // [3, 5, 4]

function createJbox(size){
  const firstLine = 0;
  const lastLine = size - 1;
  const array = [];
  for (let i = 0; i < size; i++) {
    if (i === firstLine || i === lastLine) {
      array.push('#'.repeat(size)); 
    } else {
      array.push('#' + 'J'.repeat(size - 2) + '#')
    }
  }
  return array;
};

function getResultOfEachJbox() {
  const resultOfJbox = [];
  for (let i = 0; i < testCase; i++) {
    const eachJbox = createJbox(sizeOfJbox[i]); 
    resultOfJbox.push(eachJbox);
  }
  return resultOfJbox;
};

function getResultOfTotalJbox(resultOfEachJbox) {
  for (let i = 0; i < resultOfEachJbox.length; i++) {
    if (i === resultOfEachJbox.length - 1) {
      resultOfEachJbox[i].map(v => console.log(v));
    } else {
      resultOfEachJbox[i].map(v => console.log(v));
      console.log('');
    }
  }
};

function solution() {
  const resultOfEachJbox = getResultOfEachJbox(); // ['###', '#J#', '###']
  const resultOfTotalJbox = getResultOfTotalJbox(resultOfEachJbox);
  return resultOfTotalJbox;
};
solution();
// 생각 쪼개셈