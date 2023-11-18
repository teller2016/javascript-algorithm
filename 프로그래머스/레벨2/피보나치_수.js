/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12945?language=javascript
 */

function solution(n) {
  const dict = {
    0: 0n,
    1: 1n,
  };

  for (let i = 2; i <= n; i++) {
    dict[i] = BigInt(dict[i - 2]) + BigInt(dict[i - 1]);
  }

  return dict[n] % 1234567n;
}
