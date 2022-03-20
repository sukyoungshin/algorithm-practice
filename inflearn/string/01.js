// String
function solution(n) {
  let answer = '';
  let A = '수', B = '박';    
  answer = (A+B).repeat(n).slice(0, n);
  return answer;          
};

function solution(n) {
  let answer = '', A = '수', B = '박';    
  answer = (A+B).repeat(n / 2 + 1).slice(0, n);
  return answer;          
};


const solution = (n) => {
  let answer = '';
  for(let i = 0; i < n; i++){
    answer = answer + "수박"[i%2]; // +=은 속도이슈로 풀어서 쓰는 것을 권장
  }
  return answer;
};

const solution = (n) => {
  return "수박".repeat(n/2)+(n%2==1?"수":"");
};