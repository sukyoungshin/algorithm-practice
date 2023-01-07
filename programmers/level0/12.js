// 암호 해독

// 1
function solution(cipher, code) {
  cipher = cipher.split("");

  let result = "";
  for (let index = code - 1; index < cipher.length; index += code) {
    result += cipher[index];
  }

  return result;
}

// 2
function solution(cipher, code) {
  return cipher
    .split("")
    .filter((_, index) => (index + 1) % code === 0)
    .join("");
}
