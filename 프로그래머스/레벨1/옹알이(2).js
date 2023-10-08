/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/133499
 */

function solution(babbling) {
  let count = 0;

  babbling.forEach((babble) => {
    if (
      babble.includes("ayaaya") ||
      babble.includes("yeye") ||
      babble.includes("woowoo") ||
      babble.includes("mama")
    ) {
      return;
    }
    babble = babble.replace(/aya/g, " ");
    babble = babble.replace(/ye/g, " ");
    babble = babble.replace(/woo/g, " ");
    babble = babble.replace(/ma/g, " ");
    babble = babble.replaceAll(" ", "");

    if (!babble.length) count++;
  });

  return count;
}
