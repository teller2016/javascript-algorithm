/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/134240
 */
function solution(food) {
  let front = "";
  for (let i = 1; i <= food.length; i++) {
    const use = Math.floor(food[i] / 2);
    front += "".padStart(use, i);
  }

  return front + "0" + [...front].reverse().join("");
}
