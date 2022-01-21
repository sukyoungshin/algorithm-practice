// https://www.acmicpc.net/problem/17094
// require('fs').readFileSync('/dev/stdin').toString()

const fs = require('fs');
const input = fs.readFileSync('./input1.txt').toString().split('\n');
const line = parseInt(input[0]);
const str = input[1];
const tempArray = [];

for (let i = 0; i < line; i++) {
  tempArray.push(str[i] === '2'); // 2 === true
}

const NumberOfTwo = tempArray.filter(i => i === true).length;
const NumberOfE = tempArray.filter(i => i !== true).length

if (NumberOfTwo > NumberOfE) {
  console.log (2);
} else if (NumberOfTwo < NumberOfE) {
  console.log('e');
} else {
  console.log('yee');
};
