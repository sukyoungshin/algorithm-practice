// 문자열 묶기
// 문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

// 1st
function solution(strArr) {
  const obj = {};

  for (let i = 0; i < strArr.length; i++) {
    const key = strArr[i].length;
    if (obj[key]) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }

  let answer = 0;
  const values = Object.entries(obj).map((a) => a[1]);
  for (let i = 0; i < values.length; i++) {
    if (values[i] > answer) {
      answer = values[i];
    }
  }

  return answer;
}

// 2nd
function solution(strArr) {
  let ans = Array(31).fill(0);
  for (let s of strArr) ans[s.length]++;
  return Math.max(...ans);
}

const strArr = ["a", "bc", "d", "efg", "hi"]; // result	2
