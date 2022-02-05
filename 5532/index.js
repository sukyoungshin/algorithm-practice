function init() {
  const [
    vacationDays,
    totalPageOfKorean,
    totalPageOfMath,
    maxPageOfKoreanPerDay,
    maxPageOfMathPerDay
  ] = require('fs')
    .readFileSync('./input2.txt')
    .toString()
    .split('\n')
    .map(v => parseInt(v)); 

  return [
    vacationDays, 
    totalPageOfKorean,
    totalPageOfMath,
    maxPageOfKoreanPerDay, 
    maxPageOfMathPerDay
  ];
};

function getFreeTime(vacationDays, homeworkDays) {
  const freeTime = vacationDays - homeworkDays;
  return freeTime;
};

function solution() {
  const [    
    vacationDays, 
    totalPageOfKorean,
    totalPageOfMath,
    maxPageOfKoreanPerDay, 
    maxPageOfMathPerDay
  ] = init();

  const dayOfKorean = Math.ceil(totalPageOfKorean / maxPageOfKoreanPerDay);
  const dayOfMath = Math.ceil(totalPageOfMath / maxPageOfMathPerDay);

  if (dayOfKorean === dayOfMath) {
    return getFreeTime(vacationDays, (dayOfKorean || dayOfMath));
  } else if (dayOfKorean > dayOfMath) {
    return getFreeTime(vacationDays, dayOfKorean);
  } else {
    return getFreeTime(vacationDays, dayOfMath);
  }
};

console.log(solution());