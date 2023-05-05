// l로 만들기
// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

// 1st
const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function solution(myString) {
  let answer = "";

  const standard = "l";
  const standardIndex = alphabets.findIndex((a) => a === standard);
  for (i = 0; i < myString.length; i++) {
    const currentAlphabet = myString[i];
    const currentIndex = alphabets.findIndex((a) => a === currentAlphabet);

    if (currentIndex <= standardIndex) {
      answer += standard;
    } else {
      answer += currentAlphabet;
    }
  }

  return answer;
}

// 2nd - regExp
function solution(myString) {
  return myString.replace(/[a-k]/g, "l");
}

// 3rd - 💡 문자열은 사전식 순서로 비교함 (유니코드 순서로 정렬)
function solution(myString) {
  return [...myString].map((v) => (v < "l" ? "l" : v)).join("");
}

const myString1 = "abcdevwxyz"; // result	"lllllvwxyz"
const myString2 = "jjnnllkkmm"; // result	"llnnllllmm"
