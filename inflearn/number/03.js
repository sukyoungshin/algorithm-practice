// 자릿수 더하기
const input1 = 123;
const input2 = 987;

function solution(n) {
  n = String(n);
  let sum = 0;

  for (i = 0; i < n.length; i++) {
    sum = sum + Number(n[i]);
  }
  
  return sum;
};

console.log(solution(input1));
console.log(solution(input2));