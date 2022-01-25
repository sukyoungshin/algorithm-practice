// 10부제
// 첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두번째 줄에는 7대의 자동차 번호의 끝 두자리 숫자가 주어진다
// 주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력합니다

// 입력예제
// 3
// 25 33 11 47 53 17 33

// 출력예제
// 3

// 입력예제
// 0
// 12 20 54 30 87 91 30

// 출력예제
// 3
// ================================ //

// 1 for
const date = 0;
function getNumberOfCars(carEndNumbers) {
  const array = [];
  for (let i = 0; i < carEndNumbers.length; i++) {
    array.push( carEndNumbers[i] % 10 );
  }
  return array;
};

function countNumberOfCars(date, numberOfCars) {
  let count = 0;
  for (let i = 0; i < numberOfCars.length; i++) {
    if (numberOfCars[i] === date) {
      count++;
    }
  }
  return count;
};

function solution(date) {
  const carEndNumbers = [12, 20, 54, 30, 87, 91, 30];
  const numberOfCars = getNumberOfCars(carEndNumbers);
  const count = countNumberOfCars(date, numberOfCars);
  return count;
};

console.log(solution(date));

// ================================ //
// 2 map, for ..of
const date = 0;
function getNumberOfCarsArray(carEndNumbers) {
  const array = carEndNumbers.map(car => car % 10);
  return array;
};

function countNumberOfCars(date, numberOfCarsArray) {
  let count = 0;
  for (const cars of numberOfCarsArray) {
    if (cars === date) {
      count++;
    }
  }
  return count;
};

function solution(date) {
  const carEndNumbers = [12, 20, 54, 30, 87, 91, 30];
  const numberOfCarsArray = getNumberOfCarsArray(carEndNumbers);
  const count = countNumberOfCars(date, numberOfCarsArray);
  return count;
};

console.log(solution(date));

// ================================ //
// 3 reducer
const date = 0;
function getNumberOfCarsArray (carEndNumbers) {
  return carEndNumbers.map(car => car % 10);
};

function reducer (acc, curr) {
  if (date === curr) {
    acc = acc + 1;
  }
  return acc;
};

function solution() {
  const carEndNumbers = [12, 20, 54, 30, 87, 91, 30]; // 전역변수는 되도록 지양한다.
  const numberOfCarsArray = getNumberOfCarsArray(carEndNumbers); 
  const count = numberOfCarsArray.reduce(reducer, 0); 
  return count;
};

console.log(solution());

// ================================ //
// reduce
// - 비용고려하여 map을 사용 할 수 있는 경우엔 map을 사용한다. 굳이 reduce를 고집할 필요없다.
// - reduce를 사용하는 경우 : 배열로 주는 값을 카운트해줄때, 배열이 아닌 다른 값을 return할 때, map이나 filter 체이닝 걸어서 할거 reduce로 한방에 가능할 때

// const reducer = (acc, curr) => {
//   return acc + (date === curr); // true는 1, false는 0
// };
// console.log( carEndNumbers.reduce(reducer, 0)); // 리듀스 initialValue를 생략하지 않도록 한다 (예외 발생이 되지 않도록)

// ex) 
// const Array = ['A','A','C','B','G','A','E','V','C','C','J','E','V','Q','L','Z','I','S','A','Z','O','P','O','H','I'];
// const exampleObj = Array.reduce((acc, cur)=>{
//   acc[cur] ? acc[cur] ++ : acc[cur] = 1;
//   return acc;
// }, {});

// console.log(exampleObj); 
