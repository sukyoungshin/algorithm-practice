// 문제 잘못이해함 ㅅㄱ
function init() {
  const number = 6;
  const numberArray = [7, 3, 9, 5, 6, 12];
  return {number, numberArray};
};

function findPrevNumber(number, array) {
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) {
      const prevNumber = i - 1;
      return array[prevNumber];
    }
  }
};

function findBiggerNumbers(number, index, array) {
  const emptyArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > index) {
      emptyArray.push(array[i]);
    }
  }
  if (!emptyArray.includes(number)) {
    emptyArray.push(number);
  }
  return emptyArray;
};

function solution() {
  const {number, numberArray} = init();
  const prevNumber = findPrevNumber(number, numberArray); // 자신의 바로 앞 수
  const biggerNumbers = findBiggerNumbers(number, prevNumber, numberArray); // 앞 수보다 큰 수만 한 줄로 출력
  return biggerNumbers;
};
console.log(solution());