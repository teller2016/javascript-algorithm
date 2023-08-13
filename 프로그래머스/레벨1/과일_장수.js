/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/135808
 */

function solution(k, m, score) {
  let answer = 0;

  score = score.sort().slice(score.length % m);

  for (let i = 0; i < score.length; i += m) {
    answer += score[i] * m;
  }

  return answer;
}
