/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12951?language=javascript
 */

function solution(s) {
  const lower = s.toLowerCase();
  const words = lower.split(" ");
  const result = [];
  words.forEach((word) => {
    if (word === "") {
      result.push("");
      return;
    }
    if (isNaN(word[0])) {
      result.push(word[0].toUpperCase().concat(word.slice(1)));
    } else {
      result.push(word);
    }
  });

  return result.join(" ");
}
