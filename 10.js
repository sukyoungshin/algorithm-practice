// 연필 갯수
// 연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 
// N명의 학생 수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

// 입력
// 첫번째 줄에 1000 이하의 자연수 N이 입력된다.

// 출력
// 첫 번째 줄에 필요한 다스 수를 출력합니다.

// 입력 - 25
// 출력  - 3

// 입력 - 178
// 출력 - 15
// ==========================================================================

// 1
// function solution(student) {
//   let answer = Math.ceil(student / 12);
//   return answer;
// };
// console.log( solution(25) );

// 2 
// function solution(student) {
//   const integerRestArray = String(student / 12).split('.');
//   const integer = Number(integerRestArray[0]);
//   const rest = Number('0.' + integerRestArray[1]);

//   if (rest > 0) {
//     return integer + 1;
//   }
//   return integer;
// };
// console.log( solution(25) );

// 3
// function solution(student) {
//   let count = 0;

//   for (let i = student; i > 0; i = i - 12) {
//     count = count + 1;
//   }
//   return count;
// };
// console.log( solution(178) );

// 4
function solution(student) {
  let count = 0;

  while (student > 0) {
    student = student - 12;
    count++;
  }
  return count;
};
console.log( solution(25) );