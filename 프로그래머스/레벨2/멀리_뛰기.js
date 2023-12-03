/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12914
 */

function solution(n) {
  const jumps = {
    1: 1n,
    2: 2n,
  };

  for (let i = 3; i <= n; i++) {
    jumps[i] = BigInt(jumps[i - 2]) + BigInt(jumps[i - 1]);
  }

  return jumps[n] % 1234567n;
}
