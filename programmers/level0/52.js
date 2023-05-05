// 0 떼기
// 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

// 1st
function solution(n_str) {
  return String(Number(n_str));
}

// 2nd - regExp
const solution = (n_str) => {
  return n_str.replace(/^0+/, "");
};

// 3rd
function solution(n_str) {
  return +n_str + "";
}

const n_str1 = "0010"; // result	"10"
const n_str2 = "854020"; // result	"854020"
