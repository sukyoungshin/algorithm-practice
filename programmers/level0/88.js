// 순서 바꾸기
// 정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  return [...num_list.slice(n), ...num_list.slice(0, n)];
}

const num_list1 = [2, 1, 6],
  n1 = 1; // result [1, 6, 2]
const num_list2 = [5, 2, 1, 7, 5],
  n2 = 3; //	result [7, 5, 5, 2, 1]
