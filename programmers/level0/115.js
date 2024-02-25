// 구슬을 나누는 경우의 수

// 1
const getFactorial = (number) => {
  let answer = 1;
  for (let i = number; i > 0; i--) {
    answer *= i;
  }

  return answer;
};

function solution(balls, share) {
  const 분모 = getFactorial(balls);
  const 분자 = getFactorial(balls - share) * getFactorial(share);

  return Math.round(분모 / 분자);
}

// 2. 재귀함수 사용
// const getFactorial = (n) => {
//   return n ? n * getFactorial(n - 1) : 1;
// };

// Math.floor()가 아니라 Math.round()를 사용해야하는 이유?
// - 부동소숫점: https://joooing.tistory.com/entry/Javascript-%EC%86%8C%EC%88%98%EC%A0%90floating-point-%EA%B3%84%EC%82%B0-%EC%98%A4%EB%A5%98
