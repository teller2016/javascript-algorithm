/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
 */

function solution(s) {
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")" && arr[arr.length - 1] === "(") {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }

  return arr.length === 0;
}
