// 자릿수 더하기
function solution(n) {
  n = String(n);
  let sum = 0;

  for (i = 0; i < n.length ; i++) {
    sum = sum + Number(n[i]);
  }
  
  return sum;
};
