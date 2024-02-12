// K번째수 (정렬)
const getArray = (command, array) => {
  const [start, last, index] = command;

  return [...array].slice(start - 1, last).sort((a, b) => a - b)[index - 1];
};

function solution(array, commands) {
  const result = [];
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    result.push(getArray(command, array));
  }

  return result;
}
