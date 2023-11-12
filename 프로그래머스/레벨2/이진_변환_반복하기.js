/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/70129?language=javascript
 */

function solution(s) {
  let count = 0;
  let zeroCount = 0;

  while (s !== "1") {
    const currS = s;
    const newS = currS.replaceAll("0", "");
    const decimal = newS.length;
    s = parseInt(decimal).toString(2);

    count += 1;
    zeroCount += currS.length - newS.length;
  }

  return [count, zeroCount];
}
