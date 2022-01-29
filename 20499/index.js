// https://www.acmicpc.net/problem/20499

const [k, d, a] = require('fs')
  .readFileSync('./input2.txt')
  .toString()
  .split('/')
  .map(str => parseInt(str)); 
const HASU = 'hasu';
const GOSU = 'gosu';

function solution(k, d, a) {
  if (k + a < d || d === 0) return HASU;
  return GOSU;
};

console.log(solution(k, d, a));


