/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42842
 */

function solution(brown, yellow) {
  let i = 3;
  while (true) {
    for (let j = 3; j < i + 1; j++) {
      const cntBrown = i * 2 + j * 2 - 4;
      const cntYellow = i * j - cntBrown;

      if (brown === cntBrown && yellow === cntYellow) {
        return [i, j];
      }
    }

    i++;
  }
}
