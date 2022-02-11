// hash - https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
const participant1 = ["leo", "kiki", "josipa"]; 
const completion1 = ["josipa", "kiki"];
const participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"]; 
const completion2 = ["josipa", "filipa", "marina", "nikola"];
const participant3 = ["stanko", "mislav", "mislav", "ana"]; 
const completion3 = ["stanko", "ana", "mislav"];

// 해쉬 (Hash Table) -> 자료구조에서 내부적으로 hash func()을 사용
// - 객체(key-value)
// - 속도가 빠름. 
// - 변수들의 모음. 특정 key 기준으로 값을 저장  (ex.비밀번호 저장)
function convertArrayToObject(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    const key = array[i];
    if (obj[key]) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }
  return obj;
};

function compareObjs(participant, completion) {
  for (let key in participant) {
    if (participant[key] !== completion[key]) {
      return key;
    } 
  }
};

function solution(participant, completion) {
  const participantObj = convertArrayToObject(participant); // { leo: 1, kiki: 1, josipa: 1 }
  const completionObj = convertArrayToObject(completion); // { josipa: 1, kiki: 1 }
  const hash = compareObjs(participantObj, completionObj); // 
  return hash;
};

console.log(solution(participant1, completion1)); // leo
console.log(solution(participant2, completion2)); // vinko
console.log(solution(participant3, completion3)); // mislav

// - reduce로 바꿔볼 것
// - 선언식 vs 표현식에 따라 func() 실행순서가 바뀐다. 단순히 `취향`이나 `호불호`의 문제라기보다는 사용 목적에 따라서 위에 있을 수도 있고, 아래에 있을 수도 있음
// - 선언식은 위에서 메모리에 저장함 (호이스팅), 표현식은 const 얘를 만날때 실행된다.
// - 방법에 따라, 속도나 퍼포먼스에 영향을 줄 수 있음
// - 선언식 : 미리 기능이 적재되어야 있는 경우 (바로 실행되어야 하는거)
// - 표현식 : 나중에 실행해도 되는거 (버튼 클릭같은거), 굳이 메모리에 올릴 필요 없는 경우
// 선언식 vs 표현식 (https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/#%ED%95%A8%EC%88%98-%EC%84%A0%EC%96%B8%EC%8B%9D%EA%B3%BC-%ED%91%9C%ED%98%84%EC%8B%9D%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)


// function solution(participant, completion) {
//   for (let i = 0; i < participant.length; i++) {
//     if (!completion.includes(participant[i])) {
//       return participant[i];
//     } else {
//       // 만약 completion 배열내부에 participant[i] 값이 있다면,
//       // completion 배열에서 공통값을 제거한다
//       // 두번째 돌땐 똑같은 값을 찾을 수 없으니 체크 못해서 return 되겠지!
      
//     } 
//   }
// };