// https://www.acmicpc.net/problem/5354

function init() {
  const inputs = require('fs')
    .readFileSync('./input1.txt')
    .toString()
    .trim()
    .split('\n'); 
  const testCase = parseInt(inputs[0]); // 3  
  inputs.shift();  
  const sizeOfJbox = inputs.map(v => parseInt(v)) // [3, 5, 4]

  return [testCase, sizeOfJbox];
};

function createEachJbox(size){
  const array = [];
  for (let i = 0; i < size; i++) {
    if (i === 0 || i === size - 1) {
      array.push('#'.repeat(size)); 
    } else {
      array.push('#' + 'J'.repeat(size - 2) + '#')
    }
  }
  return array;
};

function getArrayOfJboxes(testCase, jBoxSize) {
  const resultArray = [];
  for (let i = 0; i < testCase; i++) {
    const eachJbox = createEachJbox(jBoxSize[i]); 
    resultArray.push(eachJbox);
  }
  return resultArray;
};

function getResultOfTotalJbox(arrayOfJboxes) {
  for (let i = 0; i < arrayOfJboxes.length; i++) {
    if (i !== arrayOfJboxes.length - 1) {
      arrayOfJboxes[i].map(v => console.log(v));
      console.log('');
    } else {
      arrayOfJboxes[i].map(v => console.log(v));
    }
  }
};

function solution() {
  const [ testCase, sizeOfJbox ] = init();
  const arrayOfJbox = getArrayOfJboxes(testCase, sizeOfJbox); 
  const totalJbox = getResultOfTotalJbox(arrayOfJbox);
  return totalJbox;
};
solution();
// 생각 쪼개기