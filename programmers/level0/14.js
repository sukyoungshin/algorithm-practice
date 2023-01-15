// n의 배수 고르기

function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}
