// 배열의 원소 삭제하기
// 정수 배열 arr과 delete_list가 있습니다. arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr, delete_list) {
  return arr.filter((a) => !delete_list.includes(a));
}

const arr1 = [293, 1000, 395, 678, 94],
  delete_list1 = [94, 777, 104, 1000, 1, 12]; // result [293, 395, 678]
const arr2 = [110, 66, 439, 785, 1],
  delete_list2 = [377, 823, 119, 43]; // result [110, 66, 439, 785, 1]
