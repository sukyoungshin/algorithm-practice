// OX퀴즈
const operations = {
  "-": (x, y) => x - y,
  "+": (x, y) => x + y,
};

function solution(quiz) {
  const result = [];
  for (let i = 0; i < quiz.length; i++) {
    const [문제, 퀴즈정답] = quiz[i].split("=");

    const 연산자 = 문제.split(" ")[1];
    const 문제안의숫자 = 문제
      .split(" ")
      .filter((a) => a !== 연산자)
      .map((a) => Number(a));
    const 실제정답 = operations[연산자](...문제안의숫자);

    result.push(Number(퀴즈정답) === 실제정답 ? "O" : "X");
  }

  return result;
}
