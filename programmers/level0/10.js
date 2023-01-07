// 피자 나눠 먹기 (3)

// 1
function solution(slice, n) {
  if (n % slice === 0) {
    return n / slice;
  }
  return Math.floor(n / slice) + 1;
}

// 2
function solution(slice, n) {
  return Math.ceil(n / slice);
}
