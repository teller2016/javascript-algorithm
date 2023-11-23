/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973
 */

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length && s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
