// 문자열이 몇 번 등장하는지 세기
function solution(myString, pat) {
  let result = 0;

  for (let i = 0; i < [...myString].length; i++) {
    const word = myString.slice(i, pat.length + i);
    if (word === pat) {
      result += 1;
    }
  }

  return result;
}
