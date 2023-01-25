// 제곱수 판별하기

// 1
// Math.pow() 또는 (base ** number)
function solution(n) {
  let 제곱수 = 0;

  for (let i = 1; i < n; i++) {
    if (i ** 2 !== n) continue;
    제곱수 = i;
  }

  return 제곱수 !== 0 ? 1 : 2;
}

// 2
// Math.sqrt() 제곱근을 반환
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
