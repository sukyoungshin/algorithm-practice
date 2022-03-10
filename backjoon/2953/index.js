// 수학, 구현, 사칙연산
// 나는 요리사다 https://www.acmicpc.net/problem/2953

const inputs = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split('\n'); // [ '5 4 4 5', '5 4 4 4', '5 5 4 4', '5 5 5 4', '4 4 4 5' ]

function getEachParticipantsScore(inputs) {
  const array = [];
  inputs.forEach((v) => array.push(v.split(' ').map(v => parseInt(v))));
  return array;
};

function sum(list) {
  const array = [];
  list.forEach(v => array.push(v.reduce((prev, acc) => {return prev + acc}, 0)));
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
  return `${id} ${max}`;
};

function solution() {
  const eachParticipantsScore = getEachParticipantsScore(inputs); //[[ 5, 4, 4, 5 ], [ 5, 4, 4, 4 ], [ 5, 5, 4, 4 ], [ 5, 5, 5, 4 ], [ 4, 4, 4, 5 ]]
  const SumOfEachParticipantsScore = sum(eachParticipantsScore); // [ 18, 17, 18, 19, 17 ]
  const result = getBestScoreAndIndex(SumOfEachParticipantsScore); // 4 19
  return result;
};

console.log(solution());

// function()에서 parameter값 받을때 명시적으로 나타내주는게 좋을 것 -> 글구 pascal 쓰지마.. 
// init() 함수를 만들어서 전역변수를 안에 넣어주면 전역변수를 어디서 쓰는지 명확하게 알 수 있음
// 함수를 얼마나 세부적으로 쪼개는지도 고민거리 -> 무엇보다도 상대방이 알아보기 쉽게 짜는것이 중요
// 체이닝일때 한칸한칸 띄어써주면 나중에 디버깅이 쉬워짐!