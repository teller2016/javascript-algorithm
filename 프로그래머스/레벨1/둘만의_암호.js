/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/155652
 */
function solution(s, skip, index) {
  let alpha = [..."abcdefghijklmnopqrstuvwxyz"].filter((char) => {
    return ![...skip].includes(char);
  });

  let result = [...s].map((char) => {
    let i = alpha.indexOf(char);
    return alpha[(i + index) % alpha.length];
  });

  return result.join("");
}

console.log(solution("aukks", "wbqd", 5));
