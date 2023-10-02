// 공 던지기
// 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.

// 1. 최초 문제풀이
// 불필요하게 배열을 생성해서 메모리가 낭비됨
const getArray = (numbers, k) => {
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(...numbers);
  }

  return result;
};
const getIndex = (array, index) => {
  return array.filter((_, i) => i % 2 === 0)[index];
};

const getResult = (numbers, k) => {
  const index = k - 1;
  const filter = numbers.filter((_, i) => i % 2 === 0);

  if (filter.length >= k) {
    return getIndex(numbers, index);
  }

  const array = getArray(numbers, k);
  return getIndex(array, index);
};

function solution(numbers, k) {
  const even = numbers.length % 2 === 0;
  const numbers_even = [...numbers, ...numbers]; // 짝수배열 생성

  return even ? getResult(numbers, k) : getResult(numbers_even, k);
}

// 2. 개선
// 어차피 인덱스가 변하는거니까 직접 인덱스에 더해가면서 이동한다.
function solution(numbers, k) {
  let idx = 0;
  for (let i = 1; i < k; i++) {
    idx += 2;
    if (idx > numbers.length) {
      idx %= numbers.length;
    }
  }
  return numbers[idx];
}

// 3. 개선
// 곱하기는 결국 더하기의 반복이므로, 곱해버리면 한번에 이동가능
function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}

// 참고: lazy evaluation
// https://armadillo-dev.github.io/javascript/whit-is-lazy-evaluation/
