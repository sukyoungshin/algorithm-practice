// 구현, 문자열
// 하얀 칸 https://www.acmicpc.net/problem/1100

const input = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split('\n');

function isEven (hor, ver) {
  return (hor % 2 === 0) && (ver % 2 === 0);
};

function isOdd (hor, ver) {
  return (hor % 2 !== 0) && (ver % 2 !== 0);
};

function isIncludeF (hor, ver) {
  return input[hor][ver].includes('F') === true;
};

function solution() {
  let count = 0;

  for (let hor = 0; hor < input.length; hor++) {
    for (let ver = 0; ver < input[hor].length; ver++) {
      if (isEven(hor, ver) && isIncludeF(hor, ver)) {
        count = count + 1;
      } else if (isOdd(hor, ver) && isIncludeF(hor,ver)) {
        count = count + 1;
      }
    }
  }
  return count;
};

console.log(solution());

// 8x8칸을 0,1,0,1,,,로 채워넣은뒤 비교해도 됨