// 홀수

// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 85이므로 그 합은
// 77+41+53+85=256이 되고,
// 41 < 53 < 77 < 85이므로 홀수 중 최소값은 41이 된다.

// 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.

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