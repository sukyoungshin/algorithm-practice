// 배열의 유사도
// https://school.programmers.co.kr/learn/courses/30/lessons/120903

// 1
function solution(s1, s2) {
    let answer = 0;
    // s1, s2 두 배열의 길이가 같을 때
    if (s1.length === s2.length) {
        for (let i = 0; i < s1.length; i++) {
            if (s2.includes(s1[i])) {
                answer++
            } 
        }  
        return answer;
    }
    
    // s1, s2 두 배열의 길이가 다를 때
    const longArray = getLongArray(s1, s2); // 긴 배열
    const shortArray = getShortArray(s1, s2); // 짧은 배열

    for (let i = 0; i < shortArray.length; i++) {
      if (!longArray.includes(shortArray[i])) continue;
      if (longArray.includes(shortArray[i])) {
          answer++;
      }
    }

    return answer;
}

const getLongArray = (s1, s2) => {
    return s1.length > s2.length ? s1 : s2;
}

const getShortArray = (s1, s2) => {
    return s1.length < s2.length ? s1 : s2;
}


// 2
function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}
