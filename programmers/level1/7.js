// 없는 숫자 더하기

// 1
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }

  return answer;
}

// 2. 0~9까지의 전체합은 45로 고정
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }

  return 45 - answer;
}
