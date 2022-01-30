// https://www.acmicpc.net/problem/2953

const inputs = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split('\n'); // [ '5 4 4 5', '5 4 4 4', '5 5 4 4', '5 5 5 4', '4 4 4 5' ]

function getEachParticipantsScore(inputs) {
  const array = [];
  inputs.forEach((v) => array.push(v.split(' ').map(v => parseInt(v))));
  return array;
};

function getSumOfEachParticipantsScore(eachParticipantsScore) {
  const array = [];
  eachParticipantsScore.forEach(v => array.push(v.reduce((prev, acc) => {return prev + acc}, 0)));
  return array;  
};

function getBestScoreAndIndex(SumOfEachParticipantsScore) {
  let max = SumOfEachParticipantsScore[0];
  let id = 1; // 엣지케이스 (ex. SumOfEachParticipantsScore값이 만약 [50, 29, 30, 40] 이라면? )

  for (let i = 0; i < SumOfEachParticipantsScore.length; i++) {
    if (max < SumOfEachParticipantsScore[i]) {
      max = SumOfEachParticipantsScore[i];
      id = i + 1;
    }
  }
  return Number(id)+' '+Number(max);
};

function solution() {
  const eachParticipantsScore = getEachParticipantsScore(inputs); //[[ 5, 4, 4, 5 ], [ 5, 4, 4, 4 ], [ 5, 5, 4, 4 ], [ 5, 5, 5, 4 ], [ 4, 4, 4, 5 ]]
  const SumOfEachParticipantsScore = getSumOfEachParticipantsScore(eachParticipantsScore); // [ 18, 17, 18, 19, 17 ]
  const result = getBestScoreAndIndex(SumOfEachParticipantsScore); // 4 19
  return result;
};

console.log( solution() );