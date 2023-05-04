// 문자열의 뒤의 n글자
// ex) "ProgrammerS123", 11 -> "grammserS123"

// 1st
// 시작점을 구하고, substring()
// substring() 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
function solution(my_string, n) {
  return my_string.substring(my_string.length - n);
}

// 2nd
function solution(my_string, n) {
  return my_string.slice(my_string.length - n);
}

// 3rd
function solution(my_string, n) {
  const reversed = my_string.split("").reverse().join("");
  const slice = reversed.slice(0, n);
  const backToOrigin = slice.split("").reverse().join("");

  return backToOrigin;
}
