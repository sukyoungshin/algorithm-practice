// 2차원으로 만들기
// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

// 1st - slice (슬라이딩 윈도우)
function solution(num_list, n) {
  let answer = [];

  for (let i = 0; i < num_list.length; i = i + n) {
    const sliced = num_list.slice(i, i + n);
    answer.push(sliced);
  }

  return answer;
}

// 2nd - splice
function solution(num_list, n) {
  let answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

const num_list1 = [1, 2, 3, 4, 5, 6, 7, 8],
  n1 = 2; //	result [[1, 2], [3, 4], [5, 6], [7, 8]]
const num_list2 = [100, 95, 2, 4, 5, 6, 18, 33, 948],
  n2 = 3; //	result [[100, 95, 2], [4, 5, 6], [18, 33, 948]]
