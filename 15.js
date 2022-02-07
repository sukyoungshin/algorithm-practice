// 1. 학급 회장(해쉬)
function init() {
  const numberOfStudents = 15;
  const currentCandidates = 'BACBACCACCBDEDE'.split(''); // ['A', 'A', 'B', 'E', 'D']
  const expectedCandidates = ['A', 'B', 'C', 'D', 'E'];
  return {numberOfStudents, currentCandidates, expectedCandidates};
};

function convertArrayToObject(candidates) {
  const obj = {};
  for (let i = 0; i < candidates.length; i++) {
    const keys = candidates[i];
    obj[keys] = 0;
  }
  return obj;
};

function countResultOfVote(candidates, resultOfVote) {
  for (let i = 0; i < resultOfVote.length; i++) {
    let keys = resultOfVote[i];
    candidates[keys] += 1; 
  }
  return candidates;
};

// for in으로 바꿔보기
function getResult(countObj) {
  const objectKeys = Object.keys(countObj); 
  const objectValue = Object.values(countObj); 
  let student = objectKeys[0];
  let max = objectValue[0]; // 엣지케이스 (objectValue[0]이 제일 큰 값인 경우)
  for (let i = 0; i < objectValue.length; i++) {
    if ( max < objectValue[i]) {
      max = objectValue[i];
      student = objectKeys[i];
    } 
  }
  return student;
};

function solution() {
  const { currentCandidates, expectedCandidates} = init(); 
  const candidateObj = convertArrayToObject(expectedCandidates); 
  const count = countResultOfVote(candidateObj, currentCandidates);
  const result = getResult(count); 
  return result;
};
console.log(solution());