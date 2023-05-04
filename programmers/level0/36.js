// n번째 원소부터
// 정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  return num_list.splice(n - 1); // 원본배열이 바뀜 (mutable 하니까 쓰지말자!)
}

function solution(num_list, n) {
  return num_list.slice(n - 1); // 원본배열이 바뀌지 않는다. (immutable을 위해 요걸 쓰자!)
}

const num_list1 = [2, 1, 6],
  n1 = 3; // result [6]
const num_list2 = [5, 2, 1, 7, 5],
  n2 = 2; // result [2, 1, 7, 5]
