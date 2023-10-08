/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/138477
 */

function solution(k, score) {
  let save = [];
  let result = [];

  for (let i = 0; i < score.length; i++) {
    const curr = score[i];
    save.push(curr);
    save = save.sort((a, b) => b - a);
    if (save.length < k) {
      result.push(save[save.length - 1]);
    } else {
      result.push(save[k - 1]);
    }
  }

  return result;
}
