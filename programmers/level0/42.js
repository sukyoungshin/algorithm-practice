// 카운트업
// 정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 1st - Array.fill()
function solution(start, end) {
  const answer = Array(end - start + 1).fill(0);

  let index = start;
  for (let i = 0; i < answer.length; i++) {
    answer[i] = index;
    index++;
  }

  return answer;
}

// 2nd
function solution(start, end) {
  var answer = [];

  for (let i = start; i <= end; i++) {
    answer.push(i);
  }

  return answer;
}

// 3rd - Array.from()
function solution(start, end) {
  return Array.from({ length: end - start + 1 }, () => {
    return start++;
  });
}

const start = 3,
  end = 10; //	result [3, 4, 5, 6, 7, 8, 9, 10]
