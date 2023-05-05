// 주사위 게임 2
// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.

// 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
// 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
// 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
// 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, c) {
  const sum1 = a + b + c;
  const sum2 = a ** 2 + b ** 2 + c ** 2;
  const sum3 = a ** 3 + b ** 3 + c ** 3;

  if (a !== b && b !== c && a !== c) {
    return sum1;
  }

  if ((a === b && a !== c) || (b === c && b !== a) || (c === a && c !== b)) {
    return sum1 * sum2;
  }

  if (a === b && b === c && a === c) {
    return sum1 * sum2 * sum3;
  }
}

const a1 = 2,
  b1 = 6,
  c1 = 1; // result	9
const a2 = 5,
  b2 = 3,
  c2 = 3; // result	473
const a3 = 4,
  b3 = 4,
  c3 = 4; // result	110592
