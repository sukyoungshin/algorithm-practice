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
  return searchHighScoreAmoungTeams(numberOfTeamsArray); // 96
};

console.log( solution() );