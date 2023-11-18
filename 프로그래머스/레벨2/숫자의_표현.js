/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12924?language=javascript
 */

function solution(n) {
  let start = 1;
  let end = 1;
  let total = 1;
  let count = 0;

  while (end <= n) {
    if (total === n) {
      count += 1;
      total -= start;
      start += 1;
    } else if (total > n) {
      total -= start;
      start += 1;
    } else {
      end += 1;
      total += end;
    }
  }

  return count;
}
