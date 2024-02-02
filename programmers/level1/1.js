// 문자열 내 p와 y의 개수

// 1
const count = {
  p: 0,
  y: 0,
};
function solution(s) {
  const arr = [...s.toUpperCase()]; // s.split('')
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    if (str === "P") {
      count.p += 1;
    }
    if (str === "Y") {
      count.y += 1;
    }
  }

  return count.p === count.y ? true : false;
}

// 2
function solution(s) {
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
    ? true
    : false;
}

// 3
function solution(s) {
  let num = 0;

  const arr = [...s.toUpperCase()];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "P") {
      num++;
    }
    if (arr[i] === "Y") {
      num--;
    }
  }

  return num === 0 ? true : false;
}
