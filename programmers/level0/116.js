// 1
function solution(l, r) {
  const result = [];

  for (let i = l; i < r + 1; i++) {
    if (String(i).includes('1') ||
      String(i).includes('2') ||
      String(i).includes('3') ||
      String(i).includes('4') ||
      String(i).includes('6') ||
      String(i).includes('7') ||
      String(i).includes('8') ||
      String(i).includes('9')
    ) {
      continue;
    } else {
      result.push(i);
    }
  }

  return result.length > 0 ? result : [-1];
}

// 2
function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    if ([...String(i)].every(num => num === "0" || num === "5")) {
      result.push(i);
    }
  }

  return result.length > 0 ? result : [-1];
}