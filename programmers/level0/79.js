// 최댓값 만들기 (2)
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// 1st
function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue;
      const multiply = numbers[i] * numbers[j];
      answer.push(multiply);
    }
  }

  return Math.max(...answer);
}

// 2nd
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}

// 3rd (two pointer) -> 구현하고 싶었으나 실패. 나중에 다시 도전

const numbers1 = [1, 2, -3, 4, -5]; //	result 15
const numbers2 = [0, -31, 24, 10, 1, 9]; //	result 240
const numbers3 = [10, 20, 30, 5, 5, 20, 5]; //	result 600
