

function solution(a, b) {
  let answer = 0;
  let minNum = (a < b) ? a : b;
  let maxNum = (a < b) ? b : a;
      
  for (let i = minNum; i <= maxNum; i++) {
    answer = answer + i;
  }
  return answer;
}

