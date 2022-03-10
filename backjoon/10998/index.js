// A x B
// https://www.acmicpc.net/problem/10998

const input = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a * b);