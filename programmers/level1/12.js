// 숫자 문자열과 영단어 (2021 카카오 채용연계형 인턴십)

// 1. replaceAll 사용
const match = {
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

function solution(s) {
  let answer = s;

  const array = Object.keys(match);
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (s.includes(item)) {
      answer = answer.replaceAll(item, match[item]);
    }
  }

  return +answer;
}

// 2. split + join으로 치환
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
