function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (!answer.length) {
      answer.push(arr[i]);
      continue;
    }

    if (answer[answer.length - 1] === arr[i]) {
      answer.pop();
    } else {
      answer.push(arr[i]);
    }
  }


  return answer.length > 0 ? answer : [-1];
}