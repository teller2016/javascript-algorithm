/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12985?language=javascript
 */

function solution(n, a, b) {
  let cnt = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    cnt++;
  }

  return cnt;
}
