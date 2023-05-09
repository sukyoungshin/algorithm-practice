// 삼각형의 완성조건 (1)
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// - 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

// 1st
function solution(sides) {
  const max = Math.max(...sides);

  let sum = 0;
  sides.forEach((s) => (sum += s));
  sum = sum - max;

  return max < sum ? 1 : 2;
}

// 2nd
function solution(sides) {
  const [small, middle, large] = sides.sort((a, b) => a - b);

  return small + middle > large ? 1 : 2;
}

const sides1 = [1, 2, 3]; //	result 2
const sides2 = [3, 6, 2]; //	result 2
const sides3 = [199, 72, 222]; //	result 1
