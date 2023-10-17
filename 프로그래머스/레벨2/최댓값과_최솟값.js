/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12939?language=javascript
 */

function solution(s) {
  const sorted = s.split(" ").sort((a, b) => a - b);
  return `${sorted[0]} ${sorted[sorted.length - 1]}`;
}
