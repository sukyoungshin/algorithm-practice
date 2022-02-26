// 스택 https://programmers.co.kr/learn/courses/30/lessons/12909

const s1 = "()()";
const s2 = "(())()";
const s3 = ")()(";
const s4 = "())(";

function solution(s){
    if (s[0] === ')') return false;

    let number = 0;
    for (let i = 0; i < s.length; i++) {
        if (number < 0) return false;

        if (s[i] === ')') {
            number -= 1;
        } else {
            number += 1;
        }
    }

    return number === 0 ? true : false;
};

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));

// const input = s.split(''); // -> split()은 시간이 많이 소요됨 (효율성 통과X)