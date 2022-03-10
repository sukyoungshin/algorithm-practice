// 위장 https://programmers.co.kr/learn/courses/30/lessons/42578
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
