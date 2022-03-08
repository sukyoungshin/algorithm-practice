// https://www.acmicpc.net/problem/10809

const alphabetLists = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const inputWord = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .trim()
  .split(''); 

function createAlphabeticObj() {
  const hash = {};
  for (let i = 0; i < alphabetLists.length; i++) {
    const key = alphabetLists[i];
    if (inputWord.includes(key)) {
      hash[key] = 0;
    } else {
      hash[key] = -1;
    }
  }
  return hash;
};

function getIndexOfInput(obj) {
  // 반복문 : 큰 숫자에서 작은 숫자로
  for (let i = inputWord.length - 1; i >= 0; i--) {
    const key = inputWord[i];
    obj[key] = i;
  }
  return Object.values(obj);
};

function solution() {
  const alphabetObj = createAlphabeticObj(); 
  const indexArr = getIndexOfInput(alphabetObj); 
  return indexArr.join(' ');
};

console.log(solution());