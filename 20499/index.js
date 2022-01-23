// https://www.acmicpc.net/problem/20499

const input = require('fs')
  .readFileSync('./input2.txt')
  .toString()
  .split('/')
  .map(str => parseInt(str)); 

  function solution(input) {
    const [k, d, a] = input;

    if (k + a < d || d === 0) return 'hasu';
    return 'gosu';
  }

console.log( solution(input) );


