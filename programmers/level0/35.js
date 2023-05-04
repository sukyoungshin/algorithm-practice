// 첫 번째로 나오는 음수
// ex) [12, 4, 15, 46, 38, -2, 15] , result: 5
// ex) [13, 22, 53, 24, 15, 6], result: -1

function solution(num_list) {
  return num_list.findIndex((a) => a < 0);
}
