// 같은 숫자는 싫어 (스택/큐)

// 1
function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (answer[answer.length - 1] !== num) {
      answer.push(num);
    }
  }

  return answer;
}

// 2
function solution(arr) {
  return arr.filter((value, index) => value != arr[index + 1]);
}
