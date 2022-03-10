// 아나그램
function init() {
  const word1 = 'AbaAeCe';
  const word2 = 'baeeACA';
  return {word1, word2};
};

function createWordObj(word) {
  const obj = {};
  for (let i = 0; i < word.length; i++) {
    const key = word[i];
    obj[key] = 0;
  }
  return obj;
};

function countValue(wordObj, word) {
  for (let i = 0; i < word.length; i++) {
    const key = word.split('')[i];
    wordObj[key] += 1;
  }
  return wordObj;
};

function compareObjs(count1, count2) {
  for (let key in count1) {
    if (!(count2[key] && count1[key] === count2[key])) {
      return 'NO';
    } 
  }
  return 'YES';
};

function solution() {
  const {word1, word2} = init(); // AbaAeCe
  const wordObj1 = createWordObj(word1); // { A: 0, b: 0, a: 0, e: 0, C: 0 }
  const wordObj2 = createWordObj(word2); // { b: 0, a: 0, e: 0, A: 0, C: 0 }
  const count1 = countValue(wordObj1, word1); // { A: 2, b: 1, a: 1, e: 2, C: 1 }
  const count2 = countValue(wordObj2, word2); // { b: 1, a: 1, e: 2, A: 2, C: 1 }
  const result = compareObjs(count1, count2); // 
  return result;
};

console.log(solution());