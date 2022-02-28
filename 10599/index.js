// 수학, 구현, 사칙연산
// 페르시아의 왕들 https://www.acmicpc.net/problem/10599

const input = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split('\n');
  
const emptyArray = [];
for(let i = 0; i < input.length; i++) {
  emptyArray.push( input[i].split(' ').map(num => parseInt(num)) );
}

function guessingPersianKingsAge(emptyArray) {

  for (let i = 0; i< emptyArray.length; i++) {
    const [ a, b, c, d ] = emptyArray[i]; // a, b : birth range / c, d : death range
    
    if (a === b && b === c && c === d && d === a) return;
    const minAge = c-a > c-b ? c-b : c-a;
    const maxAge = d-a > d-b ? d-a : d-b;
    console.log(minAge, maxAge);
  }
}

guessingPersianKingsAge(emptyArray);

// while문 써보자 다음엔