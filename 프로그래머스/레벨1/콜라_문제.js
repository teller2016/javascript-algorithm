/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/132267
 */

function solution(a, b, n) {
  let total = 0;

  while (a <= n) {
    n -= a;
    n += b;
    total += b;
  }

  return total;
}
