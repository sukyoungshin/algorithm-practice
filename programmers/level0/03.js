// 배열의 유사도
// https://school.programmers.co.kr/learn/courses/30/lessons/120903

// 1
function solution(s1, s2) {
    let answer = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            answer++
        } 
    }  
    return answer;
};


// 2
function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}
