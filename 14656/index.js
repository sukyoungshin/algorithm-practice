// https://www.acmicpc.net/problem/14656

const input = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split('\n');

const numberOfStudents = parseInt(input[0]); 
const currentOrderOfStudentArray = input[1].split(' ').map(v => parseInt(v)); // [3, 2, 5, 4, 1]

function createExpectedOrdersOfStudents() {
  const expectedOrderOfStudents = [];
  for (let i = 1; i <= numberOfStudents; i++) {
    expectedOrderOfStudents.push(i);
  }
  return expectedOrderOfStudents; // [1, 2, 3, 4, 5]
};

function compareOrderOfStudents(correctOrderArray, currentOrderOfStudentArray) {
  const array = [];
  for (let i = 0; i < numberOfStudents; i++) {
    array.push(correctOrderArray[i] !== currentOrderOfStudentArray[i]);
  }
  return array; // [true, false, true, false, true]
};

function countNumberOfIncorrect(compareOrder) {
  let count = 0;
  for (let i = 0; i < compareOrder.length; i++) {
    if (compareOrder[i] === true) {
      count++;
    }
  }
  return count;
};

function solution() {
  const correctOrderArray = createExpectedOrdersOfStudents();
  const compareOrder = compareOrderOfStudents(correctOrderArray, currentOrderOfStudentArray);
  return countNumberOfIncorrect(compareOrder);
};

console.log( solution() );