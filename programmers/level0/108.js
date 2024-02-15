// 배열의 길이를 2의 거듭제곱으로 만들기
// 1. 첫번째 풀이
function solution(arr) {
  let arrayLength = 0;

  for (let i = 0; i < 1001; i++) {
    if (arr.length === Math.pow(2, i)) {
      return arr;
    }

    if (arr.length < Math.pow(2, i)) {
      arrayLength = Math.pow(2, i);
      break;
    }
  }

  const arrayNum = arrayLength - arr.length;
  const zeroArr = Array(arrayNum).fill(0);

  return [...arr, ...zeroArr];
}

// 2. 1번을 개선힌 코드
function solution(arr) {
  // 입력 배열의 길이를 2의 제곱수로 만드는 함수
  function makePowerOfTwo(arr) {
    const length = arr.length;
    let power = 1;
    while (power < length) {
      power *= 2;
    }
    return power;
  }

  const targetLength = makePowerOfTwo(arr);
  const zeroArr = Array(targetLength - arr.length).fill(0);

  return [...arr, ...zeroArr];
}

// 3
const solution = (arr) => {
  let num = 1;
  while (arr.length > num) {
    num *= 2;
  }
  while (arr.length !== num) {
    arr.push(0);
  }
  return arr;
};
