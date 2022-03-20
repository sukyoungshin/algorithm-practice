// 클라츠 추측
function solution(num) {
  let answer = 0;
  
  while (num !== 1) {
    num = (num % 2 !== 0) ? (num * 3 + 1) : (num / 2);
    answer = answer + 1;
    if (answer > 500) return -1;
  }

  return answer;
};