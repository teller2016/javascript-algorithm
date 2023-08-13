/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/147355
 */

function solution(t, p) {
  let result = 0;
  let target = parseInt(p);

  for (let i = 0; i <= t.length - p.length; i++) {
    let num = t.slice(i, i + p.length);
    num = parseInt(num);

    if (num <= target) result++;
  }

  return result;
}
