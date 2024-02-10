// 나누어 떨어지는 숫자 배열

// 1
const sortFunc = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};

function solution(arr, divisor) {
  const answer = arr.filter((a) => a % divisor === 0);

  return answer.length ? answer.sort(sortFunc) : [-1];
}

// 2
function solution(arr, divisor) {
  const answer = arr.filter((a) => a % divisor === 0);
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
