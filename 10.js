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