// 팩토리얼

// 1
const switchNumberToFactorial = (num) => {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
};

const getFactorials = (MAX_NUMBER) => {
  const factorials = [];
  for (let i = 0; i < MAX_NUMBER; i++) {
    factorials[i] = switchNumberToFactorial(i + 1);
  }

  return factorials;
};

function solution(n) {
  const MAX_NUMBER = 10;
  // 1. 1부터 MAX_NUMBER까지 팩토리얼이 담긴 배열을 구함
  const factorials = getFactorials(MAX_NUMBER);

  // 2. 팩토리얼이 담긴 배열에서, n 이하의 최대 팩토리얼을 리턴
  const numbers = factorials.filter((fac) => fac <= n);
  const last = numbers[numbers.length - 1];

  return numbers.indexOf(last) + 1;
}
