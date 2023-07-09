/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/176963
 */
function solution(name, yearning, photo) {
  const answer = [];

  const memory = {};
  name.forEach((name, index) => {
    memory[name] = yearning[index];
  });

  photo.forEach((nameList) => {
    const score = nameList
      .map((name) => memory[name] ?? 0)
      .reduce((acc, cur) => acc + cur, 0);

    answer.push(score);
  });

  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
