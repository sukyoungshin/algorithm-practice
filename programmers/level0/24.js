// 개미군단

// 1 🤔
function solution(hp) {
  const generalAnt = getAnts(hp, 5);
  let soldierAnt = 0;
  let workerAnt = 0;

  let total = hp - 5 * generalAnt;
  if (total >= 3) {
    soldierAnt = getAnts(total, 3);
    total = total - 3;
  }
  if (total < 3) {
    workerAnt = total;
  }

  return generalAnt + soldierAnt + workerAnt;
}

const getAnts = (HP, ANT) => {
  return Math.floor(HP / ANT);
};

// 2 much better
function solution(hp) {
  const generalAnt = Math.floor(hp / 5);
  const soldierAnt = Math.floor((hp - 5 * generalAnt) / 3);
  const workerAnt = hp - (5 * generalAnt + 3 * soldierAnt);

  return generalAnt + soldierAnt + workerAnt;
}

// 3 great
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}
