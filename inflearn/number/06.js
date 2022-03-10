// 세 수 중 최솟값 (sort를 사용하지 마시오)
// 세 수는 100보다 작은 자연수

// 1
// const numbers = [5, 31, 11];
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
// console.log( solution(...numbers) );

// 1-1
// 만일 최소값을 구하라고 한다면?
// numbers 배열에 주어진 숫자가 4개로 늘어난다면?

// const numbers = [5, 31, 11];
// function solution(a, b, c) {
//   let answer = '';
//   let min = 100;
//   if (a < min) {
//     min = a;
//   }
//   if (b < min) {
//     min = b;
//   }
//   if (c < min) {
//     min = c;
//   }
//   return answer = min;
// }
// console.log( solution(...numbers) );

// 1-2
const numbers = [5, 31, 11, 25, 55, 11, 22, 33, 44, 99];
function solution(numbers) {
  let min = numbers[0], max = numbers[0];
  let result = {};

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  result = {min, max}; 
  return result; // result대신 {min, max}로 바로 반환해도 됨
};

console.log( solution(numbers) );
// NUMBER_MIN_SAFE_INTEGER, NUMBER_MAX_SAFE_INTEGER

// 2 완전탐색
// function solution(numbers) {
//   let answer = a;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < minNumber) {
//       answer = numbers[i];
//     } 
//   }
//   return a;
// };

// console.log( solution(numbers) );

// // 2-1 완전탐색 (응용)
// const numbers = [[4, 3, 7], [10, 8, 5], [21, 15, 6]];
// function solution() {
//   let answer = numbers[0][0];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers[i].length; j++) {
//       if (numbers[i][j] < answer) {
//         answer = numbers[i][j];
//       }
//     }
//   }
//   return answer;
// };

// console.log( solution() );