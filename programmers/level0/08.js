// 중복된 문자제거

// 1. hash형태로 바꿔서 중복제거하기
function solution(my_string) {    
    const hash = {};
    my_string
        .split('')
        .map(str => hash[str] = str)

    return Object.keys(hash).join('')
}

// 2. set이용하여 중복제거하기
// * 참고 - Array 객체와의 관계 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#array_%EA%B0%9D%EC%B2%B4%EC%99%80%EC%9D%98_%EA%B4%80%EA%B3%84)
function solution(my_string) {
    return [...new Set(my_string)].join('');
}

