// 문자열 내림차순으로 배치하기
// 1
const compare = (a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
};

function solution(s) {
  return [...s].sort(compare).join("");
}

// 2
function solution(s) {
  return [...s].sort().reverse().join("");
}
