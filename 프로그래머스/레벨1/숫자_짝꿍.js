/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/131128#
 */

function getNumList(num) {
  const list = {};

  [...num].forEach((n) => {
    list[n] = (list[n] ?? 0) + 1;
  });

  return list;
}

function solution(X, Y) {
  const xList = getNumList(X);
  const yList = getNumList(Y);

  let numList = [];

  for (let i = 0; i < 10; i++) {
    if (!(xList[i] && yList[i])) continue;

    const min = Math.min(xList[i], yList[i]);
    numList = numList.concat(`${i}`.repeat(min).split(""));
  }

  if (!numList.length) return "-1";

  numList = numList.sort((a, b) => b - a);

  if (numList[0] === "0") return "0";

  return numList.join("");
}

console.log(solution("99999999999999999999", "99999999999999999999"));
console.log(solution("100", "100"));
