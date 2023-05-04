// 외계어 사전

function solution(spell, dic) {
  const spellOrder = spell.sort().join("");
  const dicOrder = dic.map((d) => d.split("").sort().join(""));

  return dicOrder.filter((d) => d === spellOrder).length > 0 ? 1 : 2;
}
// 1. spell을 정렬, dic의 각각의 단어를 정렬하여 일치하는 것의 갯수만 리턴 (완료)
// 2. spell의 단어로 만들 수 있는 전체 단어를 만들어서, dic에 일치하는것 찾아서 갯수리턴
// 3. dic의 각각의 단어 배열이, spell를 전부 포함한 경우에만 카운팅1
