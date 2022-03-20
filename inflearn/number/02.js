// 하샤드 수
const input1 = 10;
const input2 = 12;
const input3 = 11;
const input4 = 13;

function solution(x) {     
  const number = Number(x);
  const sum = getSumOfEachNumber(x);
  return isHashard(number, sum);
}

function getSumOfEachNumber(number) {
  let sum = 0;
  let string = String(number); // '10'
  for (i = 0; i < string.length; i++ ) {
    sum = sum + Number(string[i]); // 0 + 1 + 0
  }
  return sum;
}

function isHashard(number, sum) {
  return !(number % sum); // Boolean(!0) = true
}

console.log(solution(input1));
console.log(solution(input2));
console.log(solution(input3));
console.log(solution(input4));