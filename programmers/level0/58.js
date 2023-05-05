// 가까운 1 찾기
// 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.
// 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.

// 1st
function solution(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }
  return -1;
}

// 2nd
function solution(arr, idx) {
  return arr.indexOf(1, idx);
}

const arr1 = [0, 0, 0, 1],
  idx1 = 1; // result	3
const arr2 = [1, 0, 0, 1, 0, 0],
  idx2 = 4; // result	-1
const arr3 = [1, 1, 1, 1, 0],
  idx3 = 3; // result	3
