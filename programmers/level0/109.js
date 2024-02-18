// 조건 문자열
// 1 - eval (bad...)
function solution(ineq, eq, n, m) {
  let 부등호 = ineq;
  if (eq !== "!") {
    부등호 += eq;
  }

  const condition = n + 부등호 + m;
  return eval(condition) ? 1 : 0;
}

// 2
const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return op(n, m) ? 1 : 0; // Number(op(n, m))
}
