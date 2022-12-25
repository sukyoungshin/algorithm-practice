// 잘라서 배열로 저장하기 https://school.programmers.co.kr/learn/courses/30/lessons/120913

// 1
function solution(my_str, n) {
  const answer = [];
  let count = 0;
  for (let i = my_str.length; i > 0; i = i - n) {
    const first = count * n;
    const last = n * (count + 1);
    answer.push(my_str.substring(first, last));
    count++;
  }

  return answer;
}

// 2
function solution(my_str, n) {
  const answer = [];
  for (let i = 0; i < my_str.length; i = i + n) {
    answer.push(my_str.substring(i, i + n));
  }

  return answer;
}

const str1 = "abc1Addfggg4556b";
const n1 = 6;

const str2 = "abcdef123";
const n2 = 3;

console.log(solution(str1, n1));
console.log(solution(str2, n2));
