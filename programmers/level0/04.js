// 피자 나눠 먹기 (1)

// 1
function solution(n) {
    // 사람이 7명 이하일 때
    if (n <= 7) return 1;

    // 사람이 7명을 초과할 때
    if (n > 7) {
     if (n % 7 === 0) return n / 7;
      return Math.floor(n / 7) + 1;
    }
}

// 2 
function solution(n) {
    if (n <= 7) return 1;

    if (n % 7 === 0) return n / 7;
    return Math.floor(n / 7) + 1;
}

// 3
function solution(n) {

    return (n % 7 === 0) ? n / 7 : Math.floor(n / 7) + 1;
}
