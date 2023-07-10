// 분수의 덧셈
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 1st
function solution(numer1, denom1, numer2, denom2) {
  const 분자 = numer1 * denom2 + numer2 * denom1;
  const 분모 = denom1 * denom2;

  let 최대공약수 = 1;
  for (let i = 1; i <= 분자; i++) {
    if (분자 % i === 0 && 분모 % i === 0) {
      최대공약수 = i;
    }
  }

  return [분자 / 최대공약수, 분모 / 최대공약수];
}

// 2nd
function 최대공약수구하기 (분자, 분모) {
  let 최대공약수 = 1;
  for (let i = 1; i <= 분자; i++) {
    if (분자 % i === 0 && 분모 % i === 0) {
      최대공약수 = i;
    }
  }

  return 최대공약수;
}
function solution(numer1, denom1, numer2, denom2) {
  const 분자 = numer1 * denom2 + numer2 * denom1;
  const 분모 = denom1 * denom2;
  const 최대공약수 = 최대공약수구하기(분자, 분모);

  return [분자 / 최대공약수, 분모 / 최대공약수];
}


const numer1 = 1,
  denom1 = 2,
  numer2 = 3,
  denom2 = 4; //	result [5, 4]
// const numer1 = 9,
//   denom1 = 2,
//   numer2 = 1,
//   denom2 = 3; //	result [29, 6]
