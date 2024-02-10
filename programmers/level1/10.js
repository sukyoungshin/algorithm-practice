// 크기가 작은 부분 문자열

// 1
function solution(t, p) {
  let answer = 0;

  for (let i = 0; i < [...t].length; i++) {
    const num = t.slice(i, p.length + i);
    if (num.length === p.length && num <= p) {
      answer = answer + 1;
    }
  }

  return answer;
}

// 2
function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const num = t.slice(i, i + p.length);
    if (num <= p) {
      answer++;
    }
  }

  return answer;
}
