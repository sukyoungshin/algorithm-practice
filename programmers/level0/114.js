// 배열 만들기 4
function solution(arr) {
  let index = 0;
  const stk = [];

  while (index < arr.length) {
    if (!stk.length) {
      stk.push(arr[index]);
      index++;
    }

    const last = stk.length - 1;
    if (stk[last] < arr[index]) {
      stk.push(arr[index]);
      index++;
    }
    if (stk[last] >= arr[index]) {
      stk.pop();
    }
  }

  return stk;
}
