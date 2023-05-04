// 원소들의 곱이 합의 제곱보다 작을때

// 1st
function solution(num_list) {
  let sum = 0;
  let multiple = 1;

  for (let i = 0; i < num_list.length; i++) {
    sum = sum + num_list[i];
    multiple = multiple * num_list[i];
  }

  sum = Math.pow(sum, 2); // sum**2 이렇게 써도 됨

  return multiple < sum ? 1 : 0;
}

// 2nd
function solution(arr) {
  const result = [...arr];

  for (let i = 0; i < arr.length; i++) {
    // 짝수일때
    if (arr[i] % 2 === 0 && arr[i] >= 50) {
      result[i] = arr[i] / 2;
    }
    // 홀수일때
    if (arr[i] % 2 !== 0 && arr[i] < 50) {
      result[i] = arr[i] * 2;
    }
  }

  return result;
}

// 3rd - reduce 써도 됨
