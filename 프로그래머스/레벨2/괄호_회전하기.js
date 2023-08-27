/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502?language=javascript
 */

function solution(s) {
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];

    const first = s.slice(0, i);
    const last = s.slice(i);
    const str = last + first;

    for (let char of str) {
      if (stack.length && stack[stack.length - 1] === brackets[char]) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }

    if (!stack.length) result += 1;
  }

  return result;
}
