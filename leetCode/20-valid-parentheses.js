// 20- valid-parentheses https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function(s) {
  if (s.length % 2 !== 0) return false;
  const map = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '('  || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else if (stack[stack.length - 1] === map[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i])
    }
  }
  return stack.length === 0 ? true : false;
};
