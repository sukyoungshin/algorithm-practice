// hash

function init() {
  const word1 = 'DDC';
  const word2 = 'DC';
  return {word1, word2};
};

function createWordObj(word) {
  const obj = {};
  for (let i = 0; i < word.length; i++) {
    const keys = word[i];
    obj[keys] = 0;
  }
  return obj;
};

function countEachLetters(wordObj, word) {
  for (let i = 0; i < word.length; i++) {
    const keys = word[i];
    wordObj[keys] += 1;
  }
  return wordObj;
};

function compareObjs(obj1, obj2) {
  for(let key in obj1) {
    if (!(obj2[key] && obj1[key] === obj2[key])) {
      return 'NO';
    }
  }
  return 'YES';
};

function solution() {
  const {word1, word2} = init();
  const wordObj1 = createWordObj(word1); // { A: 0, b: 0, a: 0, e: 0, C: 0 }
  const wordObj2 = createWordObj(word2); // { b: 0, a: 0, e: 0, A: 0, C: 0 }
  const countWord1 = countEachLetters(wordObj1, word1); // { A: 2, b: 1, a: 1, e: 2, C: 1 }
  const countWord2 = countEachLetters(wordObj2, word2); // { b: 1, a: 1, e: 2, A: 2, C: 1 }

  const result = compareObjs(countWord1, countWord2); // 
  return result;
};
console.log(solution());