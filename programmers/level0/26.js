// 영어가 싫어요

function solution(numbers) {
  const object = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let answer = numbers;
  for (const [key, value] of Object.entries(object)) {
    answer = answer.replaceAll(key, value);
  }

  return Number(answer);
}
