// https://www.acmicpc.net/problem/5597

const inputs = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split('\n')
  .map(v => parseInt(v));

function getExpectedOrderOfNumbers() {
  const array = [];
  for (let i = 1; i < 31; i++) {
    array.push(i);
  }
  return array;
};

function searchMissingNumbers(currentOrder, expectedOrder) {
  const array = [];
  const set = new Set(currentOrder);
  for (let i = 1; i < expectedOrder.length + 1; i++) {
    array.push(set.has(i)) 
  }
  return array; 
};  

function searchIndexOfMissingNumbers(missingNumbers) {
  for (let i = 0; i < missingNumbers.length; i++) {
    if( missingNumbers[i] === false) {
      console.log(i + 1);
    }
  }
};

function solution() {
  const expectedOrder = getExpectedOrderOfNumbers(); // [1, 2, 3, ... 30]
  const currentOrder = inputs.sort((a, b) => a - b); // [1, 3, 4, 5, 6, 7, 9,,,]
  const missingNumbers = searchMissingNumbers(currentOrder, expectedOrder); // [true, false, true, true,,,,, ]
  const indexOfMissingNumbers = searchIndexOfMissingNumbers(missingNumbers);
  return indexOfMissingNumbers;
};

solution();

// index 숫자만 증가시켜서 할 수도 있음
// [1,2, 3,,,, 30] 배열에서 set 이용해서 풀 수도 있을 듯
// 