// A로 B 만들기

function solution(before, after) {
  const beforeOrder = before.split("").sort(getOrder).join("");
  const afterOrder = after.split("").sort(getOrder).join("");

  return beforeOrder === afterOrder ? 1 : 0;
}

const getOrder = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};
