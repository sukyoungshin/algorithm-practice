// 242. valid Anagram (https://leetcode.com/problems/valid-anagram/)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const TRUE = true, FALSE = false;
const isAnagram = function(s, t) {
  const sArr = covertStrToArr(s);
  const tArr = covertStrToArr(t);
  if (sArr.length !== tArr.length) return FALSE;

  const hashS = convertArrToHash(sArr);
  const hashT = convertArrToHash(tArr);

  const keyValueOfS = Object.entries(hashS);

  const result = [];
  for (let [key, value] of keyValueOfS) {
    if (!hashT[key]) return FALSE;
    result.push(hashT[key] === value);
  }

  return result.includes(FALSE) ? FALSE : TRUE;
};

const covertStrToArr = (str) => {
  str = str.split('');
  return str.sort(sortLettersFromAtoZ);
};

const sortLettersFromAtoZ = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const convertArrToHash = (arr) => {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    const keys = arr[i]; 
    if (hash[keys]) {
      hash[keys] += 1;
    } else {
      hash[keys] = 1;
    }
  }

  return hash;
};

// INPUT
let s1 = "anagram", t1 = "nagaram"; // true
let s2 = "rat", t2 = "car"; // false
let s3 = "a", t3 = "ab"; // false

// OUTPUT
console.log(isAnagram(s1, t1));
console.log(isAnagram(s2, t2));
console.log(isAnagram(s3, t3));