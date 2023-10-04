// 소인수분해
// 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
const 약수배열구하기 = (number) => {
  const result = [];
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result;
};
const 소수배열구하기 = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const 소수 = 소수구하기(array[i]);
    if (소수.length !== 0) {
      result.push(소수);
    }
  }
  return result;
};
const 소수구하기 = (number) => {
  const result = [];
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result.length < 2 ? result : [];
};

function solution(n) {
  const 약수배열 = 약수배열구하기(n);
  const 소수배열 = 소수배열구하기(약수배열);

  return 소수배열.flat();
}

// +) 참고: 에라토스테네스의 체 https://lazyhysong.tistory.com/m/132
// O(n log n)
function getPrimes(num) {
  const prime = Array(52).fill(true);

  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.filter(Boolean);
}
