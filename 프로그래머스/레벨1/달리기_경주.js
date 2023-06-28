/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript
 */
function solution(players, callings) {
  const indexAndName = {};
  const nameAndIndex = {};
  players.forEach((player, index) => {
    indexAndName[index] = player;
    nameAndIndex[player] = index;
  });

  callings.forEach((call) => {
    const callerIndex = nameAndIndex[call];
    const callerName = call;

    const frontIndex = callerIndex - 1;
    const frontName = indexAndName[frontIndex];

    indexAndName[frontIndex] = callerName;
    indexAndName[callerIndex] = frontName;

    nameAndIndex[frontName] = callerIndex;
    nameAndIndex[callerName] = frontIndex;
  });

  return Object.values(indexAndName);
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
