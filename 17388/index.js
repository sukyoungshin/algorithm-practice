// https://www.acmicpc.net/problem/17388
// for, if문으로 짠 뒤 -> method 이용하여 변경하는 연습

const input = require('fs')
  .readFileSync('./input5.txt')
  .toString()
  .split(' ')
  .map(str => parseInt(str)); 

// for -> method로 변경
function sum(input) {
  // forEach
  // input.forEach((num) => result = result + num);

  // reduce
  const result = input
    .reduce((prev, curr) => prev + curr, 0);

  return result;
};

function searchMinNumber(input) {
  let min = input[0];
  input
    .forEach((el) => {
      if (min > el) {
        min = el;
      }
    }
  );

  return min;
};

const nameOfSchools = ['Soongsil', 'Korea', 'Hanyang', 'SiwonSchool', 'PizzaSchool'];

function matchSchoolsWithMinNumber(minNumber, input) {
  const schoolsArray = nameOfSchools
    .filter(( _, index) => minNumber === input[index]); // 가독성 고려하여 띄어서 표현
  return schoolsArray;
};

function solution(input) {
  let answer = sum(input);
  if (answer >= 100) return 'OK';

  let minNumber = searchMinNumber(input); // caching -> dp
  const result = matchSchoolsWithMinNumber(minNumber, input);
  return result;
};
console.log( solution(input) );

// sort() 찾아보기
// --> main 코드부터 보고 세부코드를 확인한다.

// before refactoring (for, if)
// function sum(input) {
//   let answer = 0;
//   for (let i = 0; i < input.length; i++) {
//     answer = answer + input[i];
//   }
//   return answer;
// };

// function searchMinNumber(input) {
//   let min = input[0];
//   for (let i = 0; i < input.length; i++) {
//     if (min > input[i]) {
//       min = input[i]
//     }
//   }
//   return min;
// };

// const nameOfSchools = ['Soongsil', 'Korea', 'Hanyang', 'SiwonSchool', 'PizzaSchool'];

// function matchSchoolsWithMinNumber(minNumber, input) {
//   for (let i = 0; i < input.length; i++) {
//     if (minNumber === input[i]) {
//       schoolsArray.push(nameOfSchools[i]);
//     }
//   }
//   return schoolsArray;
// };

// function solution(input) {
//   let answer = sum(input);
//   if (answer >= 100) return 'OK';

//   let minNumber = searchMinNumber(input); // caching -> dp
//   const result = matchSchoolsWithMinNumber(minNumber, input);
//   return result;
// };
// console.log( solution(input) );