// 이진수 더하기
// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// - return 값은 이진수를 의미하는 문자열입니다.
// - 1 ≤ bin1, bin2의 길이 ≤ 10
// - bin1과 bin2는 0과 1로만 이루어져 있습니다.
// - bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.

// 1
function solution(bin1, bin2) {
  bin1 = bin1.split("").reverse();
  bin2 = bin2.split("").reverse();
  const Length = bin1.length > bin2.length ? bin1.length : bin2.length;
  const MAX = 2;

  const answer = [];
  let carry = 0;
  for (let i = 0; i < Length; i++) {
    const SUM = getNumber(bin1[i]) + getNumber(bin2[i]) + carry;

    if (SUM < MAX) {
      answer.push(SUM);
      carry = 0;
    } else {
      answer.push(SUM - MAX);
      carry = 1;
    }
  }

  if (carry === 1) {
    answer.push(carry);
  }

  return answer.reverse().join("");
}

const getNumber = (number) => {
  return !isNaN(Number(number)) ? Number(number) : 0;
};

// 2
function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

const bin1A = 10,
  bin2A = 11; // result 101
const bin1B = 1001,
  bin2B = 1111; // result 11000
