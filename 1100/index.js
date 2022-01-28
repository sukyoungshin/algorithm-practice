// https://www.acmicpc.net/problem/1100

const input = require('fs')
  .readFileSync('./input4.txt')
  .toString()
  .split('\n');
const array = [];
let count = 0;

function solution() {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          if(input[i][j].includes('F') === true ) {
            count++;
          }
        }
      } else if (i % 2 !== 0) {
        if (j % 2 !== 0) {
          if( input[i][j].includes('F') === true ) {
            count++;
          }
        }
      }
    }
  }
  return count;
};

console.log( solution() );

// 8x8칸을 0,1,0,1,,,로 채워넣은뒤 비교해도 됨
// --> 함수로 정리
