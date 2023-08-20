/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/133502
 */

function solution(ingredient) {
  let result = 0;
  const stack = [];

  ingredient.forEach((item) => {
    stack.push(item);

    if (stack.length < 4) return;

    if (stack.slice(-4).join("") === "1231") {
      result += 1;
      stack.splice(stack.length - 4, 4);
    }
  });

  return result;
}
