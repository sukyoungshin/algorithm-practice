// 카드뭉치
function solution(cards1, cards2, goal) {
  const copyCards1 = [...cards1];
  const copyCards2 = [...cards2];
  let answer = "";

  for (let i = 0; i < goal.length; i++) {
    const word = goal[i];
    const cards = cards1.includes(word) ? copyCards1 : copyCards2;

    if (!cards.includes(word) || cards[0] !== word) {
      answer = "No";
      return answer;
    }

    cards.shift();
    answer = "Yes";
  }

  return answer;
}
