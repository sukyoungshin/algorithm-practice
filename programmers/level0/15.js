// 369게임

// 1
function solution(order) {
  return String(order)
    .split("")
    .filter((num) => Number(num) % 3 === 0 && Number(num) !== 0).length;
}

// 2
function solution(order) {
  return String(order)
    .split("")
    .filter((num) => ["3", "6", "9"].includes(num)).length;
}
