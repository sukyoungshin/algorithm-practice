// 가장 큰 수 찾기

// 1
function solution(array) {
  const max = Math.max(...array);
  const index = array.findIndex((arr) => arr === max);

  return [max, index];
}

// 2 indexOf를 사용할 수도 있음
