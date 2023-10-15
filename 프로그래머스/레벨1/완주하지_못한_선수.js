/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
 */

function solution(participant, completion) {
  const participantSorted = participant.sort();
  const completionSorted = completion.sort();

  for (let i = 0; i < completionSorted.length; i++) {
    if (participantSorted[i] != completionSorted[i]) {
      return participantSorted[i];
    }
  }

  return participantSorted[participantSorted.length - 1];
}
