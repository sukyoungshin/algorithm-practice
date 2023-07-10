// 피자 나눠 먹기 (2)
// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
// 제한사항 1 ≤ n ≤ 100

// 1 for loop
function solution(n) {
  for (let i = 1; i < 101; i++) {
    if ((n * i) % 6 === 0) {
      return (n * i) / 6;
    }
  }
}

// 2 while loop
function solution(n) {
  let piece = 6;

  while (true) {
    if (piece % n === 0) break;
    piece += 6;
  }

  return piece / 6;
}

const n1 = 6,
  result1 = 1;
const n2 = 10,
  result2 = 5;
const n3 = 4,
  result3 = 2;
