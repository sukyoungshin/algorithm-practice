// 한 번만 등장한 문자

// 1
function solution(s) {
  const hash = getHash(s);

  return Object.entries(hash)
    .filter((o) => o[1] === 1)
    .map((filtered) => filtered[0])
    .sort(getOrder)
    .join("");
}

const getHash = (s) => {
  const temp = {};

  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    if (!temp[str]) {
      temp[str] = 1;
    } else {
      temp[str] += 1;
    }
  }
  return temp;
};

const getOrder = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};

// TODO: 남의 풀이법인데 이해안감
// 2
function solution(s) {
  const res = [];
  for (let c of s) {
    if (s.indexOf(c) !== s.lastIndexOf(c)) continue;
    res.push(c);
  }

  return res.sort().join("");
}
