/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/142086
 */
function solution(s) {
  const history = {};

  let result = [...s].map((char, index) => {
    if (history[char] == undefined) {
      history[char] = index;
      return -1;
    }

    const diff = index - history[char];
    history[char] = index;
    return diff;
  });

  return result;
}
