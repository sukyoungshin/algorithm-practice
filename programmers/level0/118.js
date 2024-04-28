function solution(arr, query) {
  let answer = [...arr];

  for (let i = 0; i < query.length; i++) {
    const index = query[i];

    if (i % 2 === 0) {
      answer = [...answer].slice(0, index + 1);
    } else {
      answer = [...answer].slice(index);
    }
  }

  return answer;
}