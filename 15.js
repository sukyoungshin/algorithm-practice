// 1. 학급 회장(해쉬)

function init() {
  const numberOfStudents = 15;
  const candidates = ['A', 'B', 'C', 'D', 'E'];
  const resultOfVote = 'BACBACCACCBDEDE'.split(''); // ['B', 'A', 'C', 'B', 'A', 'C', 'C', 'A', 'C', 'C', 'B', 'D', 'E', 'D', 'E']
  return { numberOfStudents, candidates, resultOfVote };
};

function createCandidateObj(candidates) {
  const countObject = {};
  for (let i = 0; i < candidates.length; i++) {
    const keyValue = candidates[i];
    countObject[keyValue] = 0;
  }
  return countObject;
};

function countResultOfVote(candidateObj, resultOfVote) {
  const A = 'A', B = 'B', C = 'C', D = 'D', E = 'E';
  for (let i = 0; i < resultOfVote.length; i++) {
    if (resultOfVote[i] === A) {
      candidateObj[A] += 1;
    } else if (resultOfVote[i] === B) {
      candidateObj[B] += 1;
    } else if (resultOfVote[i] === C) {
      candidateObj[C] += 1;
    } else if (resultOfVote[i] === D) {
      candidateObj[D] += 1;
    } else {
      candidateObj[E] += 1;
    }
  }
  return candidateObj;
};

function getResult(countObj) {
  const objectValueLength = Object.values(countObj);
  const objectKeys = Object.keys(countObj);
  const max = objectValueLength[0];
  for (let i = 0; i < objectValueLength.length; i++) {
    if ( max < objectValueLength[i]) {
      console.log(objectKeys[i]);
    }
  }
};

function solution() {
  const { candidates, resultOfVote} = init();
  const candidateObj = createCandidateObj(candidates); // { A: 0, B: 0, C: 0, D: 0, E: 0 }
  const count = countResultOfVote(candidateObj, resultOfVote); // { A: 3, B: 3, C: 5, D: 2, E: 2 }
  const result = getResult(count); // C
  return result;
};

solution();