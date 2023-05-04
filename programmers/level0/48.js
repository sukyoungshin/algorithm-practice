// 		배열의 길이에 따라 다른 연산하기
// 정수 배열 arr과 정수 n이 매개변수로 주어집니다. arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.

function isOdd(index) {
  return index % 2 !== 0;
}

function solution(arr, n) {
  if (isOdd(arr.length)) {
    return arr.map((a, i) => (!isOdd(i) ? a + n : a));
  }
  return arr.map((a, i) => (isOdd(i) ? a + n : a));
}

const arr1 = [49, 12, 100, 276, 33],
  n1 = 27; // result	[76, 12, 127, 276, 60]
const arr2 = [444, 555, 666, 777],
  n2 = 100; // result	[444, 655, 666, 877]
