/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/68935?language=javascript
 */
function solution(n) {
  const three = [];
  let result = 0;

  while (n) {
    three.push(n % 3);
    n = Math.floor(n / 3);
  }

  three.reverse().forEach((num, i) => {
    result += num * 3 ** i;
  });

  return result;
}
