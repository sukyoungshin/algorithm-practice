// 최빈값 구하기
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

// 1
function getObject(array) {
  const obj = {};
  array.forEach((a) => (obj[a] = obj[a] + 1 || 1));

  return obj;
}

function solution(array) {
  if (array.length === 1) return array[0];

  const obj = getObject(array);
  const entries = Object.entries(obj);
  const max = Math.max(...Object.values(obj));

  return entries.filter((a) => a[1] === max).length <= 1
    ? Number(entries.filter((a) => a[1] === max)[0][0])
    : -1;
}
// 2 다른사람 풀이. .Map(), .Set() => 중복체크때문에 사용한 듯. ex) 테스트케이스 [1,1,1]
function solution(array) {
  let map = new Map();

  // Map 객체 초기화
  for (let i = 0; i <= Math.max(...array); i++) {
    map.set(i, 0);
  }

  // array 배열의 원소값과 일치하는 Map 객체의 key를 증가시킨다
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], map.get(array[i]) + 1);
  }

  // Map 객체의 value만 모아서 배열로 만든다
  let arr = Array.from(map.values());

  // 최대값 산출
  let max = Math.max(...arr);

  // 최대값이 하나만 있다면 max, 여러 개 중복된다면 -1 출력
  if (arr.indexOf(max) !== arr.lastIndexOf(max)) {
    return -1;
  } else {
    return arr.indexOf(max);
  }
}

const array1 = [1, 2, 3, 3, 3, 4]; //	result 3
const array2 = [1, 1, 2, 2]; //	result -1
const array3 = [1]; //	result 1
