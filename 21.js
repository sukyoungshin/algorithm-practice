// 스택
// 크레인 인형뽑기 https://programmers.co.kr/learn/courses/30/lessons/64061
const board = [
  [0,0,0,0,0],
  [0,0,1,0,3],
  [0,2,5,0,1],
  [4,2,4,4,2],
  [3,5,1,3,1]
];
const moves = [1,5,3,5,1,2,1,4];

function createEachStack(board) {
  const boardStack = new Array(); // 스택의 배열 --> 스택 !== 배열
  const boardLength = board.length;
  const EACH_BOARD_SIZE = board[0].length;
  for (let i = 0; i < boardLength; i++) {
    boardStack.push([]); // [ [], [], [], [], [] ]
  } 

  for (let boardIndex = boardLength - 1; boardIndex >= 0; boardIndex--) {
    for (let j = 0; j < EACH_BOARD_SIZE; j++) {
      if (board[boardIndex][j] !== 0 ) {
        boardStack[j].push(board[boardIndex][j]);
      }
    }
  }

  return boardStack;
};

// moves -> [1,5,3,5,1,2,1,4]	
// boards -> [ [3,4], [5,2,2], [1,4,5,1], [3,4], [1,2,1,3] ]
function getNumberOfValidDolls(moves, boards) {
  const basketStack = []; // 4, 3, 1, 1, 3, 2, 4
  let number = 0;
  for (let i = 0; i < moves.length; i++) {
    const boardIndex = moves[i]-1; // 0
    if (boards[boardIndex].length !== 0) {
      // basketStack에, moves의 숫자에 맞는 값을 boards에서 pop해서 저장하고
      const prevDoll = basketStack[basketStack.length-1]; // 이전값
      const pickedDoll = boards[boardIndex].pop();
      basketStack.push(pickedDoll);
      // basketStack에 있는 popped된 이전 값과 같은 값이 들어오면 없애주고, number + 2 
      if (pickedDoll === prevDoll) {
        number += 2;
      } 
    }
  }
  
  return number;
};

function solution(board, moves) {
  const boardStack = createEachStack(board); // [ [ 3, 4 ], [ 5, 2, 2 ], [ 1, 4, 5, 1 ], [ 3, 4 ], [ 1, 2, 1, 3 ] ]
  const vaildDolls = getNumberOfValidDolls(moves, boardStack); 
  return vaildDolls*2;
};

console.log(solution(board, moves));