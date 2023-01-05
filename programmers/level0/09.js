// 인덱스 바꾸기

// 1 
function solution(my_string, num1, num2) {
    const origin = my_string.split('');
    const first = origin[num1];
    const last = origin[num2];

    const copy = [...my_string.split('')];
    copy[num1] = last;
    copy[num2] = first; 
    return copy.join('');
}

// 2 - Destructuring assignment [a,b] = [b,a]
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}

