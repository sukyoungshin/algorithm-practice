// 모음 제거

// 1
function solution(my_string) {
    const vowel = ["a","e","i","o","u"];
    for (let i = 0; i < vowel.length; i++) {
        if (my_string.includes(vowel[i])) {
             my_string = my_string.split(vowel[i]).join('')
        }
    }

    return my_string;
}

// 2
function solution(my_string) {
    const vowel = ["a","e","i","o","u"];   
    return my_string.split('').filter(str => !vowel.includes(str)).join('');
}
