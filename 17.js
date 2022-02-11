function init() {
  const word1 = 'DC';
  const word2 = 'DCB';
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
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return 'NO';
  for (let key in obj1) {
    if (!(obj2[key] && obj1[key] === obj2[key])) {
      return 'NO';
    }
  }
  return 'YES'; 
  // let key1 = Object.keys(obj1);
  // let value1 = Object.values(obj1);
  // let key2 = Object.keys(obj2);
  // let value2 = Object.values(obj2);
  // for (let i = 0; i < key1.length; i++) {
  //   for (let j = 0; j < key2.length; j++) {
  //     if (!(key1[i] === key2[j] && value1[i] === value2[j])) {
  //       return 'NO';
  //     } 
  //   }
  // }
  // return 'YES';
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

// reduce로 바꿔보셈