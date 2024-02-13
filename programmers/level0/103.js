// 배열 만들기 5
// 1
function solution(intStrs, k, s, l) {
  const answer = [];

  for (let i = 0; i < intStrs.length; i++) {
    const int = +intStrs[i].slice(s, s + l);
    if (int > k) {
      answer.push(int);
    }
  }

  return answer;
}

// 2
function solution(intStrs, k, s, l) {
  return intStrs.map((int) => +int.slice(s, s + l)).filter((int) => int > k);
}
