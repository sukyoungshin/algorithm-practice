// 정수 배열 arr와 자연수 k가 주어집니다.
// 만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.
// 이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.

// 1st
function solution(arr, k) {
  if (k % 2 !== 0) {
    return arr.map((a) => a * k);
  }

  return arr.map((a) => a + k);
}

// 2nd
function solution(arr, k) {
  return arr.map((a) => (k % 2 ? a * k : a + k));
}

const arr1 = [1, 2, 3, 100, 99, 98],
  k1 = 3; // result [3, 6, 9, 300, 297, 294]
const arr2 = [1, 2, 3, 100, 99, 98],
  k2 = 2; // result [3, 4, 5, 102, 101, 100]
