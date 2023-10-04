// 합성수 찾기
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
const 합성수구하기 = (number) => {
  const result = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result.length >= 3 ? result : [];
};
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    const 합성수 = 합성수구하기(i);
    if (합성수.length !== 0) {
      answer++;
    }
  }

  return answer;
}
