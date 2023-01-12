// k의 갯수

// 1
function solution(i, j, k) {
  const strArray = [];
  for (let index = i; index < j + 1; index++) {
    const str = String(index)
      .split("")
      .filter((s) => s === String(k));

    if (str.length === 0) continue;
    strArray.push(...str);
  }

  return strArray.length;
}
