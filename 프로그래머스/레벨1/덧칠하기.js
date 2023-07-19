/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/161989
 */
function solution(n, m, section) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (section.includes(i)) {
      ++count;
      i += m - 1;
    }
  }

  return count;
}

console.log(solution(8, 4, [2, 3, 6]));
