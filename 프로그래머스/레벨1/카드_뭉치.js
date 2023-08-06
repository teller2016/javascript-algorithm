/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/159994
 */

function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    const word = goal[i];

    if (cards1[0] == word) {
      cards1.shift();
      continue;
    } else if (cards2[0] == word) {
      cards2.shift();
      continue;
    }

    return "No";
  }

  return "Yes";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
