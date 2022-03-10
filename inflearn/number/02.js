// 하샤드 수
function solution(x) {     
  let answer = true;
  let stringX = String(x);
  let length = stringX.length; // 입력받은 숫자의 자릿수
  let numberX = Number(x);
  let sum = 0;
  
  for (i = 0 ; i < length; i++ ) {
    sum = sum + Number(stringX[i]);
  }
  
  answer = !(numberX % sum); // false 
  return answer;
};