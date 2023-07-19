/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/160586
 */

function solution(keymap, targets) {
  const min = {};

  keymap.forEach((key) => {
    [...key].forEach((char, index) => {
      if (!min.hasOwnProperty(char)) {
        min[char] = index + 1;
      } else {
        min[char] = Math.min(min[char], index + 1);
      }
    });
  });

  const result = targets.map((target) => {
    let count = 0;
    for (let i = 0; i < target.length; i++) {
      const char = target[i];
      if (!min.hasOwnProperty(char)) return -1;

      count += min[char];
    }

    return count;
  });

  return result;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
