// 홀수
const numbers = [12, 77, 38, 41, 53, 92, 85];

function searchMinNumber(oddNumbersArray) {
  let min = oddNumbersArray[0];
  for (let i = 0; i < oddNumbersArray.length; i++) {
    if (oddNumbersArray[i] < min) {
      min = oddNumbersArray[i];
    }
  }
  return min;
};

function solution(numbers) {
  const oddNumbersArray = numbers.filter(num => num % 2 !== 0); // [ 77, 41, 53, 85 ]
  const sumOfOddNumbers = oddNumbersArray.reduce((prev, curr) => prev + curr, 0); // 256
  const minNumber = searchMinNumber(oddNumbersArray);
  console.log( sumOfOddNumbers ); 
  console.log( minNumber );
};

solution(numbers);