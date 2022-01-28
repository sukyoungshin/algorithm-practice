// https://www.acmicpc.net/problem/9085

// 2 way
const input = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split('\n');

let numberOfTestCase = parseInt(input.shift()); // 2

while(numberOfTestCase--) {
  parseInt(input.shift());
  const numbers = input.shift().split(' ').map(v => parseInt(v));
  const sum = numbers.reduce((result, acc) => {return result + acc}, 0);
  console.log(sum);
};

// 1 way
// const input = require('fs')
//   .readFileSync('./input1.txt')
//   .toString()
//   .split('\n');

// const ListOfNumbersArray = [];

// function classification(input) {
//   for (let i = 1 ; i < input.length; i++) {
//     if (i % 2 === 0) {
//       ListOfNumbersArray.push(input[i]);
//     }
//   }
// };
// classification(input);

// const reducer = (prev, curr) => prev + curr;
// for (let i = 0; i < ListOfNumbersArray.length; i++) {
//   console.log( ListOfNumbersArray[i].split(' ').map(str => Number(str)).reduce(reducer) )
// };

