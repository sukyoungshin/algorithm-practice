// 1부터 n까지 합 출력하기
// n은 20 이하의 자연수
// 입력 6 , 출력 21
// 입력 10, 출력 55

// 1. for
function solution(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum = sum + i;
  }
  return sum;
};

// 2. while
function solution(n) {
  let sum = 0;
  while (n > 0) {
    sum += n--;
  }
  return sum;
};

// 3. reduce
function createArray(n) {
  const array = [];
  for (let i = n; i > 0; i--) {
    array.push(i);
  }
  return array;
};

function solution(n) {
  const array = createArray(n);
  const result = array.reduce((prev,curr) => prev + curr);
  return result;
};

console.log(solution(6));

