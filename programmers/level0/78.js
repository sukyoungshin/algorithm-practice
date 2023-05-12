// 숨어있는 숫자의 덧셈 (2)
// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// 1 ≤ my_string 안의 자연수 ≤ 1000
// 연속된 수는 하나의 숫자로 간주합니다.
// 000123과 같이 0이 선행하는 경우는 없습니다.
// 문자열에 자연수가 없는 경우 0을 return 해주세요.

// 1st - regex
function solution(my_string) {
  const regExp = /[0-9]+/g;
  const numbers = my_string.match(regExp);

  if (numbers === null) {
    return 0;
  }

  let answer = 0;
  numbers.forEach((number) => {
    answer += Number(number);
  });
  return answer;
}

// 2nd - regex
// .replace(/[A-z]/g, " ")로 하시면 대문자 소문자 모두 포함
function solution(my_string) {
  let answer = 0;
  const regExp = /[A-z]/g;
  const numbers = my_string
    .replace(regExp, " ")
    .split(" ")
    .filter((str) => str)
    .map((num) => (answer += Number(num)));

  return numbers.length === 0 ? 0 : answer;
}

const my_string1 = "aAb1B2cC34oOp"; // result 37
const my_string2 = "1a2b3c4d123Z"; // result 133
