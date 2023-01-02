// 특정 문자 제거하기

// 1
function solution(my_string, letter) {
  return my_string.split('').filter(str => str !== letter).join('');
}

//2 
function solution(my_string, letter) {
  return my_string.split(letter).join('');
}
