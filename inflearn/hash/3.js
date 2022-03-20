// 큰 수 출력하기
const numberArray = [7, 3, 9, 5, 6, 12];

function solution(array) {
  let answer = array[0]; // 7

  for (let i = 1; i < array.length; i++) {
    const PREV = array[i-1];
    const CURR = array[i];

    if (PREV > CURR) continue;
    answer = answer + ' ' + CURR;
  }
  return answer;
}

console.log(solution(numberArray));