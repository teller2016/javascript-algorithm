/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/154539
 *
 * 풀이: stack 사용
 */

function solution(numbers) {
  let stack = [0];
  let result = [];

  for (let i = 1; i < numbers.length; i++) {
    const curr = numbers[i];

    while (stack.length && numbers[stack[stack.length - 1]] < curr) {
      const index = stack.pop();
      result[index] = curr;
    }

    stack.push(i);
  }

  while (stack.length) {
    result[stack.pop()] = -1;
  }

  return result;
}
