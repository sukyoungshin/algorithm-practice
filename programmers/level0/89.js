// 날짜 비교하기
// 정수 배열 date1과 date2가 주어집니다. 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.
// 만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution 함수를 완성해 주세요.

function solution(date1, date2) {
  const DATE1 = new Date(date1.join("/")).getTime();
  const DATE2 = new Date(date2.join("/")).getTime();

  return DATE1 < DATE2 ? 1 : 0;
}

const date1A = [2021, 12, 28],
  date2A = [2021, 12, 29]; // result 1
const date1B = [1024, 10, 24],
  date2B = [1024, 10, 24]; // result 0
