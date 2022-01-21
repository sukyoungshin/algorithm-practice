// 세 수 중 최솟값

// const numbers = [5, 31, 11];
// 1
// function solution(a, b, c) {
//   let answer = '';
//   if (a < b && a < c) {
//     answer = a;
//   } else if (b < a && b < c) {
//     answer = b;
//   } else if (c < a && c < b) {
//     answer = c;
//   } 
//   return answer;
// };

// 2 완전탐색
// function solution(a, b, c) {
//   let answer = a;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < answer) {
//       answer = numbers[i];
//     }
//   }
//   return answer;
// };

// console.log( solution(...numbers) );

// 3 완전탐색 (응용)
const numbers = [[4, 3, 7], [10, 8, 5], [21, 15, 6]];

function solution() {
  let answer = numbers[0][0];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      if (numbers[i][j] < answer) {
        answer = numbers[i][j];
      }
    }
  }
  return answer;
};

console.log( solution() );