// 간단한 식 계산하기
// 문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

// 1st
function solution(binomial) {
  return eval(binomial);
}

// 2nd
function solution(binomial) {
  binomial = binomial.split(" ");
  let [num1, operator, num2] = binomial;
  num1 = Number(num1);
  num2 = Number(num2);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
  }
}

const binomial1 = "43 + 12"; // result 55
const binomial2 = "0 - 7777"; // result -7777
const binomial3 = "40000 * 40000"; // result 1600000000
