// 두 수의 연산값 비교하기

function solution(a, b) {
  const sum1 = Number(`${a}${b}`);
  const sum2 = 2 * a * b;

  return sum1 === sum2 ? sum1 : Math.max(sum1, sum2);
}
