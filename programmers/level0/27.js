// 외계어 사전

function solution(spell, dic) {
  const spellOrder = spell.sort().join("");
  const dicOrder = dic.map((d) => d.split("").sort().join(""));

  return dicOrder.filter((d) => d === spellOrder).length > 0 ? 1 : 2;
}
