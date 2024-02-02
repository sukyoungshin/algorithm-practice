// x만큼 간격이 있는 n개의 숫자

// 1
function solution(x, n) {
  const arr = Array(n).fill(x);

  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
  }

  return arr;
}

// 2
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
