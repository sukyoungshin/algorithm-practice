// 점의 위치 구하기

// 1
function solution(dot) {
  if (dot[0] > 0) {
    return dot[1] > 0 ? 1 : 4;
  }

  return dot[1] < 0 ? 3 : 2;
}

// 2
function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
