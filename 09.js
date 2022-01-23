// [자바스크립트 알고리즘 문제풀이]

// 삼각형 판별하기
// A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// ▣ 입력설명 
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

// ▣ 출력설명 
// 첫 번째 줄에 “YES", "NO"를 출력한다.

// ▣ 입력예제 1                                  
//  6 7 11

// ▣ 출력예제 1 
// YES

// ▣ 입력예제 2                                   
// 13 33 17

// ▣ 출력예제 2 
// NO

const numbers = [13, 17, 17];

// 이런 형태가 테스트의 단위 (단위테스트의 가장 작은 단위)
function getMaxNumber(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) { 
      max = numbers[i];
    }
  }
  return max; // closure 가급적 지양
};

function getSumOfRestNumbers(numbers, max) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
  }
  sum = sum - max;  
  return sum;
};

function isTriangle(sum, max) {
  return sum > max;
};

// 주석이 없는 코드 = 좋은 코드
function solution (numbers) {
  let max = getMaxNumber(numbers);
  let sum = getSumOfRestNumbers(numbers, max);

  if (isTriangle(sum, max)) return 'YES';
  return 'NO';
};

console.log(solution(numbers));

// map, filter, reduce 금지..
// 오류범위부터 찾고 -> 고친다
// 눈버깅(?), 콘솔찍어보고, debugging 툴 찍어보고, -> 기능별로 function으로 빼내어 단위별 테스트
