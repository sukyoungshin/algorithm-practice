const fs = require('fs');
const input = fs.readFileSync('./input3.txt').toString().replace('\r', '').split('\n');
const date = parseInt(input[0]);
// const strCovertsArray = input[1].split(' ').map(str => parseInt(str)); // [ 1, 2, 3, 4, 5 ]

// 1 map, filter
// function comparison (date, strCovertsArray) {  
//   const newArray = strCovertsArray.map(num => num === date ? 1 : 0);
//   const result = newArray.filter(num => num !== 0).length;
//   return result;
// };

// 2 for
// function comparison (date, strCovertsArray) {  
//   let count = 0;
//   for (let i = 0; i < strCovertsArray.length; i++) {
//     if (strCovertsArray[i] === date) {
//       count++
//     } 
//   }
//   return count;
// };

// 3 reduce
const strCovertsArray = input[1].split(' ').map(str => parseInt(str) === date); // [ true, true, false, false, true ]

function comparison (date, strCovertsArray) {  
  const reducer = (prev, curr) => {
    if (curr === true) {
      return 1 + prev;
    } else {
      return 0 + prev;
    }
  };

  return strCovertsArray.reduce(reducer);
};

console.log(comparison(date, strCovertsArray));

// 삼항연산자 대신 if문을 사용하도록 한다. (삼항연산자는 가독성이 떨어지고 명확하지 않음. 값 위주로 사용한다) 