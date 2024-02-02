// 음양 더하기
function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    const sign = signs[i];
    if (sign) {
      answer += absolutes[i];
    }
    answer -= absolutes[i];
  }

  return answer;
}
