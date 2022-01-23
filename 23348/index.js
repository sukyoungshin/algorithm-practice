// https://www.acmicpc.net/problem/23348

let [ score, teams, ...players ] = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split('\n');

score = score.split(' ').map(v => parseInt(v)); // [3, 6, 9]
teams = parseInt(teams); // 2

// 리펙터링...
function createNumberOfTeamsArray() {
  const numberOfTeamsArray = [];
  for (let i = 0; i < teams; i++) {
    numberOfTeamsArray.push(0);
  };
  return numberOfTeamsArray; 
};

function createNumberOfPlayersArray() {
  const array = [];
  for (let i = 0; i < players.length; i++) {
    array.push(0);
  }
  return array; 
};

function getSumOfEachPlayersScore(numberOfPlayersArray) {
  for (let i = 0; i < players.length; i++) {
    const userScores = players[i].split(' ').map(v => parseInt(v)); // [1, 2, 3] [1, 1, 1] [2, 2, 2] ...
    let sum  = 0;
    for (let j = 0; j < userScores.length; j++) {
      sum = sum + userScores[j] * score[j];
    }
    numberOfPlayersArray[i] = sum; 
  }
  return numberOfPlayersArray;
};

function getSumOfEachTeamsScore(numberOfPlayersArray, numberOfTeamsArray) {
  for (let i = 0; i < teams; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      sum = sum + numberOfPlayersArray[j + i*3]; 
    }
    numberOfTeamsArray[i] = sum; 
  }
  return numberOfTeamsArray;
};

function searchHighScoreAmoungTeams(numberOfTeamsArray) {
  let max = numberOfTeamsArray[0];
  for (let i = 0; i < numberOfTeamsArray.length; i++) {
    // 조건문 - 바뀌는 값이 왼쪽
    if (numberOfTeamsArray[i] > max) { 
      max = numberOfTeamsArray[i];
    }
  }
  return max;
};

function solution() {
  const numberOfTeamsArray = createNumberOfTeamsArray(); // [0, 0]
  const numberOfPlayersArray = createNumberOfPlayersArray(); // [0, 0, 0, 0, 0, 0]

  getSumOfEachPlayersScore(numberOfPlayersArray); // [ 42, 18, 36, 0, 6, 54 ]
  getSumOfEachTeamsScore(numberOfPlayersArray, numberOfTeamsArray); // [96, 60]
  const result = searchHighScoreAmoungTeams(numberOfTeamsArray); // 96
  return result;
};

console.log( solution() );



// 원래 코드
// function createNumberOfTeamsArray() {
//   const sumArray = [];
//   for (let i = 0; i < numberOfTeams; i++) {
//     sumArray.push(i);
//   };
//   return sumArray;
// };

// function collectSumOfUserScores() {
//   const array = [];
//   for (let i = 0; i < players.length; i++) {
//     array.push(0);
//   }
//   return array;
// };

// function comparison( ) {
//   const sumOfTeamsArray = createNumberOfTeamsArray();
//   const sumOfUserScores = collectSumOfUserScores();

//   for (let i = 0; i < players.length; i++) {
//     const userScores = players[i].split(' ').map(v => parseInt(v));
//     let sum  = 0;
//     for (let j = 0; j < userScores.length; j++) {
//       sum = sum + userScores[j] * score[j]
//     }
//     sumOfUserScores[i] = sum;
//   }

//   for (let j = 0; j < numberOfTeams; j++) {
//     let sum = 0;
//     for (let i = 0; i < 3; i++) {
//       sum = sum + sumOfUserScores[i + j*3];
//     }
//     sumOfTeamsArray[j] = sum;
//   }

//   let max = sumOfTeamsArray[0];
//   for (let i = 0; i < sumOfTeamsArray.length; i++) {
//     if (sumOfTeamsArray[i] > max) {
//       max = sumOfTeamsArray[i]
//     }
//   }
//   return max;
// };

// console.log( comparison() );