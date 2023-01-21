// 대문자와 소문자

// 1
function solution(my_string) {
  return my_string
    .split("")
    .map((alphabet) =>
      alphabet !== alphabet.toUpperCase()
        ? alphabet.toUpperCase()
        : alphabet.toLowerCase()
    )
    .join("");
}
