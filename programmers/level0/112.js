// 정수를 나선형으로 배치하기

function solution(n) {
  const array = makeInitialArray(n); // 배열초기화

  let number = 1;
  let row = 0;
  let column = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // right, down, left, up

  let dirIndex = 0;
  while (number <= n * n) {
    array[row][column] = number;
    number++;
    const nextRow = row + directions[dirIndex][0];
    const nextColumn = column + directions[dirIndex][1];
    if (
      nextRow < 0 ||
      nextRow >= n ||
      nextColumn < 0 ||
      nextColumn >= n ||
      array[nextRow][nextColumn]
    ) {
      dirIndex = (dirIndex + 1) % 4;
    }
    row += directions[dirIndex][0];
    column += directions[dirIndex][1];
  }

  return array;
}
/** 배열 초기화 */
const makeInitialArray = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  return result;
};

