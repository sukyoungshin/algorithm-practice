// 완주하지 못한 선수 https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
const participant1 = ["leo", "kiki", "josipa"]; 
const completion1 = ["josipa", "kiki"];
const participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"]; 
const completion2 = ["josipa", "filipa", "marina", "nikola"];
const participant3 = ["stanko", "mislav", "mislav", "ana"]; 
const completion3 = ["stanko", "ana", "mislav"];

function convertArrayToObject(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    const key = array[i];
    if (obj[key]) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }
  return obj;
};

function compareObjs(participant, completion) {
  for (let key in participant) {
    if (participant[key] !== completion[key]) {
      return key;
    } 
  }
};

function solution(participant, completion) {
  const participantObj = convertArrayToObject(participant); // { leo: 1, kiki: 1, josipa: 1 }
  const completionObj = convertArrayToObject(completion); // { josipa: 1, kiki: 1 }
  const hash = compareObjs(participantObj, completionObj); // 
  return hash;
};

console.log(solution(participant1, completion1)); // leo
console.log(solution(participant2, completion2)); // vinko
console.log(solution(participant3, completion3)); // mislav

// - reduce로 바꿔볼 것