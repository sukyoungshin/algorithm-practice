// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
// 문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.

// 1. slice, substr, substring
function solution(myString, pat) {
  const index = myString.lastIndexOf(pat) + pat.length;

  return myString.slice(0, index);
}

const myString1 = "AbCdEFG",
  pat1 = "dE"; //	result "AbCdE"
const myString2 = "AAAAaaaa",
  pat2 = "a"; //	result "AAAAaaaa"
