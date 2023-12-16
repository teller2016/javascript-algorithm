/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12981
 */

function solution(n, words) {
  const used = {};
  used[words[0]] = true;
  for (let i = 1; i < words.length; i++) {
    wordBefore = words[i - 1];
    wordCurrent = words[i];

    lastChar = wordBefore[wordBefore.length - 1];
    currentChar = wordCurrent[0];
    if (lastChar != currentChar || used[wordCurrent]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    used[wordCurrent] = true;
  }

  return [0, 0];
}
