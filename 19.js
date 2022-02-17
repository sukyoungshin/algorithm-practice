// hash (위장)
// https://programmers.co.kr/learn/courses/30/lessons/42578
const clothes1 = [
  ["yellowhat", "headgear"], 
  ["bluesunglasses", "eyewear"], 
  ["green_turban", "headgear"]
];
const clothes2 = [
  ["crowmask", "face"], 
  ["bluesunglasses", "face"], 
  ["smoky_makeup", "face"]
];

function createClothesObj(clothes) {
  const obj = {};
  for (let i = 0; i < clothes.length; i++) {
    const key = clothes[i][1];
    obj[key] = 1; 
  }
  return obj;
};

function countEachKey(obj, clothes) {
  for (let i = 0; i < clothes.length; i++) {
    const key = clothes[i][1];
    obj[key] += 1;
  };
  return obj;
};

function getCombinationOfSum(countObj) {
  let sum = 0;
  for (let key in countObj) {
    sum += countObj[key];
  }
  return sum;
};

function getCombinationOfMultiply(sum, obj) {
  // 1. Obj key값이 하나일 때, 조합의 수 = 각각의 아이템 수를 더한 값 - 1 (깨벗고 있는 경우의 수)
  if (Object.keys(obj).length === 1) return sum - 1;

  // 2. Obj key값이 여러개 일 때, 조합의 수 = 경우의 수 곱한 값 - 1 (다 벗은 경우를 뺌)
  let multiply = 1;
  for (let key in obj) {
    multiply = multiply * obj[key];
  }
  let result = multiply - 1;
  return result;
};

function solution(clothes) {
  const clothObj = createClothesObj(clothes); // { headgear: 1, eyewear: 1 } --> 기본값 1 (깨벗고 있는 경우의 수)
  const countCloth = countEachKey(clothObj, clothes); // { headgear: 3, eyewear: 2 }
  const combinationSum = getCombinationOfSum(countCloth); // 5
  const combinationMultiply = getCombinationOfMultiply(combinationSum, clothObj); // 
  return combinationMultiply;
};
console.log(solution(clothes1));
console.log(solution(clothes2));

// push()하면 return값이 있음 (push된 갯수 값)

/*
곱할때 안입을수있단 선택지가 있자나여
해드기어 2개랑 헤드기어를 안입을수도있죠?
그리고 아이웨어1개 쓰는거랑 아이웨어를 안쓰는 선택지도 있어요
그래서 선택지가 각각 2개랑 1개가아니라 3개와 2개가 됩니다
그리고 저걸 3곱하기 2를하면 6인데,
6개의 조합에, 아이웨어도 안입고 해드기어도 안입는 깨벗고있는 조합이 있어요
아예 안입는 조건은 없자나여. 그래서 깨벗는건 빼줍니다 그래서 -1을 해요
=====================================
멀티플이니깐 먼저 곱해주고요
모든 조합의 수에서 깨벗기 1개를 빼주면됩니다
그거 멀티플 넘모 잘 해놔서 걘 수정안해도 될덧?
대신 썸맏는게 아니고 썸받는게아니고 원래꺼 clothObj받아야졍?
만약 썸도 쓰고싶고 멀티플도 쓰고싶은거면
썸함수에선, 각각 안입는다의 경우의수인 1을 더해줘서 리턴하고
그걸 다시 멀티플함수에서 받아서 곱해주면 그게 결과가 모든조합이 나온거거든요?
(깨벗기도 포함되어있음)
*/
