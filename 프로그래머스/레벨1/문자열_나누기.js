/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/140108
 */

function solution(s) {
  if (s.length === 0) return 0;
  let first = s[0];
  let remain = "";

  let firstCnt = 1;
  let diff = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] == first) {
      firstCnt++;
    } else {
      diff++;
    }

    if (firstCnt === diff) {
      remain = [...s].splice(i + 1).join("");
      break;
    }
  }

  return 1 + solution(remain);
}
