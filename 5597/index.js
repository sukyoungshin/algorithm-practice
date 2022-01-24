// https://www.acmicpc.net/problem/5597

const getInputNumberArray = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split('\n')
  .map(v => Number(v));

function getBasicOrderArray() {
  const array = [];
  for (let i = 1; i <= 30; i++) {
    array.push(i);
  }
  return array;
};

function solution() {
  const basicOrder = getBasicOrderArray(); // [1, 2, 3, ... 30]

  const filteredOrder = [];
  for (let i = 0; i < getInputNumberArray.length; i++) {
    filteredOrder.push( basicOrder.filter(num => num !== getInputNumberArray[i]) );
  }
  return filteredOrder;

};

solution();