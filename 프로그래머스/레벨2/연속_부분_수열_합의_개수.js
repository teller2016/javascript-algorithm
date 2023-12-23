/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/131701
 */

function solution(elements) {
  const set = new Set();
  const arr = elements.concat(elements);

  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      const sliced = arr.slice(i, i + j + 1);
      const total = sliced.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      set.add(total);
    }
  }
  return set.size;
}
