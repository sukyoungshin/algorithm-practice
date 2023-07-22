// 빈 배열에 추가, 삭제하기
// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때, flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 추가하고, flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.

// 1
function solution(arr, flag) {
  const answer = [];

  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      const arrayLength = arr[i] * 2;
      const add = new Array(arrayLength).fill(arr[i]);
      answer.push(...add);
    } else {
      answer.splice(-arr[i], arr[i]);
    }
  }

  return answer;
}

// 2
const operator = {
  "1": "w",
  "-1": "s",
  "10": "d",
  "-10": "a",
};
function solution(numLog) {
  let answer = "";
  for (let i = 0; i < numLog.length; i++) {
    const key = numLog[i + 1] - numLog[i];
    if (!key) break;
    answer += operator[key];
  }

  return answer;
}

const arr = [3, 2, 4, 1, 3],
  flag = [true, false, true, false, false]; // result [3, 3, 3, 3, 4, 4, 4, 4]
