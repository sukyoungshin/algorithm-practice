// 수학, 사칙연산
// 과자 https://www.acmicpc.net/problem/10156

const [ k, n, m ] = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split(' ')
  .map(v => parseInt(v));

// k : 과자 한 개의 가격
// n : 사려고 하는 과자의 개수
// m : 현재 동수가 가진 돈
function solution(k, n, m) {
  if (k * n > m) {
    return k * n - m;
  } else {
    return 0;
  }
};

console.log( solution(k, n, m) );
