// 문자열 여러번 뒤집기
// 1
function solution(my_string, queries) {
  for (let i = 0; i < queries.length; i++) {
    const copyArr = [...my_string];
    const [from, to] = queries[i];
    const partialString = copyArr.slice(from, to + 1);
    const reversedString = partialString.reverse().join("");
    copyArr.splice(from, to - from + 1, reversedString);
    my_string = copyArr.join("");
  }
  return my_string;
}

// 2
function solution(my_string, queries) {
  let answer = [...my_string];

  for (let i = 0; i < queries.length; i++) {
    const [from, to] = queries[i];
    const partialString = answer.slice(from, to + 1);
    const reverseString = partialString.reverse().join("");
    answer.splice(from, partialString.length, ...reverseString);
  }

  return answer.join("");
}

// 참고
const fruits1 = [..."🍏", "🍎", "🍇", "🍉"];
const reverse1 = "🍐🍈";
fruits1.splice(0, 2, reverse1); // fruits1: ['🍐🍈', '🍇', '🍉']

const fruits2 = [..."🍏", "🍎", "🍇", "🍉"];
const reverse2 = "🍐🍈";
fruits2.splice(0, 2, reverse2); // fruits1: ['🍐', '🍈', '🍇', '🍉']
