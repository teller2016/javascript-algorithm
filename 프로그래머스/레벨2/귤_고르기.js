/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/138476
 */

function solution(k, tangerine) {
  const obj = {};

  tangerine.forEach((item) => {
    obj[item] == undefined ? (obj[item] = 1) : (obj[item] += 1);
  });

  const arr = Object.values(obj).sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    k -= arr[i];
    if (k <= 0) {
      return i + 1;
    }
  }
}
