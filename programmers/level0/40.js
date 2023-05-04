// 길이에 따른 연산
// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

// 1st
function solution(num_list) {
  const lastIndex = num_list.length - 1;

  let sum = 0;
  if (num_list.length >= 11) {
    return num_list.map((num) => (sum += num))[lastIndex];
  }

  let multiple = 1;
  return num_list.map((num) => (multiple *= num))[lastIndex];
}

// 2nd - reduce
function solution(num_list) {
  const mult = (acc, v) => acc * v;
  const add = (acc, v) => acc + v;

  return num_list.length > 10
    ? num_list.reduce(add, 0)
    : num_list.reduce(mult, 1);
}
