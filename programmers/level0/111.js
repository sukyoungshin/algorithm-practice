// 캐릭터의 좌표

// 1
const directions1 = {
  up: [0, 1],
  down: [0, -1],
  left: [-1, 0],
  right: [1, 0],
};

function solution(keyinput, board) {
  const answer = [0, 0];
  const boardWidth = board[0];
  const boardHeight = board[1];

  for (let i = 0; i < keyinput.length; i++) {
    const [leftMove, rightMove] = directions1[keyinput[i]];

    // 이동 후의 좌표 계산
    const newX = answer[0] + leftMove;
    const newY = answer[1] + rightMove;

    // 보드 경계
    const rangeX = Math.floor(boardWidth / 2);
    const rangeY = Math.floor(boardHeight / 2);

    // 보드 경계를 넘어가는 경우 보정
    if (newX < -rangeX) {
      answer[0] = -rangeX;
    } else if (newX > rangeX) {
      answer[0] = rangeX;
    } else {
      answer[0] = newX;
    }

    if (newY < -rangeY) {
      answer[1] = -rangeY;
    } else if (newY > rangeY) {
      answer[1] = rangeY;
    } else {
      answer[1] = newY;
    }
  }

  return answer;
}

// 2. 1번을 개선한 코드 (객체를 사용하여 코드 몇줄 더 줄일 수 있음)
const directions2 = {
  up: (x, y) => [x + 0, y + 1],
  down: (x, y) => [x + 0, y - 1],
  left: (x, y) => [x - 1, y + 0],
  right: (x, y) => [x + 1, y - 0],
};

function solution(keyinput, board) {
  const answer = [0, 0];
  const boardWidth = board[0];
  const boardHeight = board[1];

  for (let i = 0; i < keyinput.length; i++) {
    const [newX, newY] = directions2[keyinput[i]](...answer);

    // 보드 경계
    const rangeX = Math.floor(boardWidth / 2);
    const rangeY = Math.floor(boardHeight / 2);

    // 보드 경계를 넘어가는 경우 보정
    if (newX < -rangeX) {
      answer[0] = -rangeX;
    } else if (newX > rangeX) {
      answer[0] = rangeX;
    } else {
      answer[0] = newX;
    }

    if (newY < -rangeY) {
      answer[1] = -rangeY;
    } else if (newY > rangeY) {
      answer[1] = rangeY;
    } else {
      answer[1] = newY;
    }
  }

  return answer;
}

// 3 - 남의 풀이
function solution(keyinput, board) {
  let res = [0, 0];
  for (let p of keyinput) {
    switch (p) {
      case "left":
        if (-res[0] < board[0] / 2 - 1) res[0]--;
        break;
      case "right":
        if (res[0] < board[0] / 2 - 1) res[0]++;
        break;
      case "up":
        if (res[1] < board[1] / 2 - 1) res[1]++;
        break;
      case "down":
        if (-res[1] < board[1] / 2 - 1) res[1]--;
        break;
    }
  }
  return res;
}
