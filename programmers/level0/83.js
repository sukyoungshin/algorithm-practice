// 문자열 계산하기
// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

function solution(my_string) {
  my_string = my_string.split(" ");
  let answer = Number(my_string[0]);

  for (let i = 1; i < my_string.length; i++) {
    if (my_string[i] === "+") {
      answer += Number(my_string[i + 1]);
    } else if (my_string[i] === "-") {
      answer -= Number(my_string[i + 1]);
    }
  }

  return answer;
}
