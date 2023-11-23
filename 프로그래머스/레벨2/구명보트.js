/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42885
 */

function solution(people, limit) {
  people = people.sort((a, b) => b - a);
  let result = 0;
  let left = 0;
  let right = people.length - 1;

  while (left < right) {
    if (people[left] + people[right] <= limit) {
      right -= 1;
      result += 1;
    }

    left += 1;
  }

  return people.length - result;
}
