// 시저암호
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// 1. slice + []
const getNextCharacter1 = (str, n) => {
  const textArray = upper.includes(str) ? upper : lower;
  const index =
    textArray.indexOf(str) + n >= textArray.length
      ? textArray.indexOf(str) - textArray.length
      : textArray.indexOf(str);

  return textArray.slice(index + n, index + n + 1);
};

function solution(s, n) {
  let answer = [];

  const array = [...s];
  for (let i = 0; i < array.length; i++) {
    const str = array[i];
    if (str === " ") {
      answer.push(" ");
    } else {
      answer.push(getNextCharacter1(str, n));
    }
  }

  return answer;
}

// 2. string에서도 index로 접근가능
const getNextCharacter2 = (str, n) => {
  const textArray = upper.includes(str) ? upper : lower;
  let index = textArray.indexOf(str) + n;
  if (index >= textArray.length) {
    index -= textArray.length;
  }

  return textArray[index];
};

function solution(s, n) {
  let answer = "";

  const array = [...s];
  for (let i = 0; i < array.length; i++) {
    const str = array[i];
    if (str === " ") {
      answer += " ";
    } else {
      answer += getNextCharacter2(str, n);
    }
  }

  return answer;
}
