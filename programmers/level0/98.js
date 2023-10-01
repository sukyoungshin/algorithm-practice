// 공 던지기
// 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.
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
