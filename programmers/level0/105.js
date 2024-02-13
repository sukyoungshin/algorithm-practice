// 특별한 이차원 배열 2
// 1
function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
      answer = 1;
    }
  }
  return answer;
}

// 2
function solution(arr) {
  return arr.every((a, i) => a.every((_, j) => arr[i][j] === arr[j][i]))
    ? 1
    : 0;
}
