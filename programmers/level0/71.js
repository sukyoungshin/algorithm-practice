// 문자열 겹쳐쓰기
// 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

// 1st
function solution(my_string, overwrite_string, s) {
  const myStr = [...my_string];
  myStr.splice(s, overwrite_string.length, overwrite_string);
  return myStr.join("");
}

// 2nd
function solution(my_string, overwrite_string, s) {
  const start = my_string.slice(0, s);
  const middle = overwrite_string;
  const end = my_string.slice(s + overwrite_string.length);

  return start + middle + end;
}

const my_string1 = "He11oWor1d",
  overwrite_string1 = "lloWorl",
  s1 = 2; //	result "HelloWorld"
const my_string2 = "Program29b8UYP",
  overwrite_string2 = "merS123",
  s2 = 7; //	result "ProgrammerS123"
