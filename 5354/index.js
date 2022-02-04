// https://www.acmicpc.net/problem/5354
const inputs = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split('\n'); 
const numberOfTextCase = parseInt(inputs[0]); // 3  
inputs.shift();  
const sizeOfJbox = inputs.map(v => parseInt(v)) // [3, 5, 4]

function makeJbox(size){
  const firstLine = 0;
  const middleLine = sizeOfJbox.length - 2;  
  const lastLine = sizeOfJbox.length - 1;
  const array = [];
  for (let i = 0; i < size; i++) {
    if (i === firstLine) {
      array.push('#'.repeat(size)); 
    } else if (i === middleLine) {
      for (let k = 0; k < size - 2; k++) {
        array.push('#' + 'J'.repeat(size - 2) + '#')
      }
    } else if ( i === lastLine) {
      array.push('#'.repeat(size));
    }
  }
  return array;
};

function getResultOfEachJbox() {
  const resultOfJbox = [];
  for (let j = 0; j < sizeOfJbox.length; j++) {
    const eachJbox = makeJbox(sizeOfJbox[j]); 
    resultOfJbox.push(eachJbox);
  }
  return resultOfJbox;
};

function solution() {
  const resultOfEachJbox = getResultOfEachJbox(); // ['###', '#J#', '###']
  for (let i = 0; i < resultOfEachJbox.length; i++) {
    if (i !== resultOfEachJbox.length - 1) {
      resultOfEachJbox[i].map(v => console.log(v));
      console.log('');
    } else {
      resultOfEachJbox[i].map(v => console.log(v));
    }
  }
};

solution(); // 생각 쪼개셈