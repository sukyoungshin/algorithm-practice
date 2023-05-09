// 컨트롤 제트
// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

// 1st
function solution(s) {
  let answer = 0;
  const arr = s.split(" ");
  arr.forEach((a, i) => {
    if (!isNaN(a)) {
      answer += Number(a);
    } else {
      answer -= Number(arr[i - 1]);
    }
  });

  return answer;
}

// 2nd - stack
function solution(s) {
  const stack = [];
  for (const str of s.split(" ")) {
    if (str === "Z") {
      stack.pop();
    } else {
      stack.push(str);
    }
  }

  let answer = 0;
  stack.forEach((a) => (answer += Number(a)));
  return answer;
}

const s1 = "1 2 Z 3"; // result 4
const s2 = "10 20 30 40"; // result 100
const s3 = "10 Z 20 Z 1"; // result 1
const s4 = "10 Z 20 Z"; // result 0
const s5 = "-1 -2 -3 Z"; // result	-3
