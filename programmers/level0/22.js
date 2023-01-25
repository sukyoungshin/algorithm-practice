// 외계 행성의 나이

// 1
function solution(age) {
  const alphabet = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };

  ageStr = age
    .toString()
    .split("")
    .map((str) => {
      const key = Number(str);
      return str.replace(str, alphabet[key]);
    })
    .join("");

  return result;
}

// 2
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
