// 		이어 붙인 수
// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

// 1st
function solution(num_list) {
  const odd = num_list.filter((num) => num % 2 !== 0).join("");
  const even = num_list.filter((num) => num % 2 === 0).join("");

  return Number(odd) + Number(even);
}

// 2nd
function getArray(num_list, condition) {
  if (condition === "odd") {
    return num_list.filter((num) => num % 2 !== 0).join(""); // => 스코프에 num_list 빼먹어서 개헛짓
  }
  return num_list.filter((num) => num % 2 === 0).join("");
}

function solution(num_list) {
  const odd = Number(getArray(num_list, "odd"));
  const even = Number(getArray(num_list, "even"));

  return odd + even;
}

const num_list1 = [3, 4, 5, 2, 1]; // result 393
const num_list2 = [5, 7, 8, 3]; // result 581
