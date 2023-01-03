// 자릿수 더하기

// 1 number => string 
function solution(n) {
  let answer = 0;
  n.toString().split('').map(num => answer += Number(num));
  return answer;
}

// 2 number ✅
function solution(n) {
  let answer = 0;
  while (n > 0) {
    answer += n % 10;
    n = Math.floor(n / 10);
  }
  return answer;
}
