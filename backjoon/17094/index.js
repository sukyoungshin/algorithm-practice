// 구현, 문자열
// Serious Problem https://www.acmicpc.net/problem/17094
const input = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split('\n');
const line = parseInt(input[0]);
const str = input[1];

function createArray (){
  const array = [];
  for (let i = 0; i < line; i++) {
    array.push(str[i] === '2'); // 2 === true
  }
  return array;
};

function getCountTwo(tempArray) {
  return tempArray.filter(i => i === true).length;
};

function getCountE(tempArray) {
  return tempArray.filter(i => i !== true).length;
};

function solution() {
  const tempArray = createArray();
  const countTwo = getCountTwo(tempArray);
  const countE = getCountE(tempArray);
  
  if (countTwo > countE) {
    return 2;
  } else if (countTwo < countE) {
    return 'e';
  } else {
    return 'yee';
  };
};

console.log(solution());
