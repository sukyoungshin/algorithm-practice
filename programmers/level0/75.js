// 가까운 수
// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
  const difference = array.sort().map((a) => Math.abs(a - n));
  const closest = Math.min(...difference);
  const index = difference.indexOf(closest);

  return array[index];
}

const array1 = [3, 10, 28],
  n1 = 20; //	result 20
const array2 = [10, 11, 12],
  n2 = 13; //	result 12
const array3 = [11, 14, 12],
  n3 = 13; // result 12
