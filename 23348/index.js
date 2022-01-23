// https://www.acmicpc.net/problem/23348

let [ score, numberOfTeams, ...players ] = require('fs')
  .readFileSync('./input1.txt')
  .toString()
  .split('\n');

score = score.split(' ').map(v => parseInt(v)); // [3, 6, 9]
numberOfTeams = parseInt(numberOfTeams); // 2

function createNumberOfTeamsArray() {
  const sumArray = [];
  for (let i = 0; i < numberOfTeams; i++) {
    sumArray.push(i);
  };
  return sumArray;
};

function collectSumOfUserScores() {
  const array = [];
  for (let i = 0; i < players.length; i++) {
    array.push(0);
  }
  return array;
};

function comparison( ) {
  const sumOfTeamsArray = createNumberOfTeamsArray();
  const sumOfUserScores = collectSumOfUserScores();

  for (let i = 0; i < players.length; i++) {
    const userScores = players[i].split(' ').map(v => parseInt(v));
    let sum  = 0;
    for (let j = 0; j < userScores.length; j++) {
      sum = sum + userScores[j] * score[j]
    }
    sumOfUserScores[i] = sum;
  }

  for (let j = 0; j < numberOfTeams; j++) {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
      sum = sum + sumOfUserScores[i + j*3];
    }
    sumOfTeamsArray[j] = sum;
  }

  // 바뀌는 값이 왼쪽
  let max = sumOfTeamsArray[0];
  for (let i = 0; i < sumOfTeamsArray.length; i++) {
    if (sumOfTeamsArray[i] > max) {
      max = sumOfTeamsArray[i]
    }
  }
  return max;
};

console.log( comparison() );