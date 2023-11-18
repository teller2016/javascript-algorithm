/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12911?language=javascript
 */

const getOnes = (n) => [...n.toString(2)].filter((item) => item == "1").length;

function solution(n) {
  const ones = getOnes(n);
  n += 1;

  while (getOnes(n) !== ones) {
    n += 1;
  }

  return n;
}
