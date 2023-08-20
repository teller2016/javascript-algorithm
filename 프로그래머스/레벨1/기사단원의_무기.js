/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/136798
 */

function solution(number, limit, power) {
  // get num의 약수 개수
  const getDivisorLength = (num) => {
    const divisor = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisor.push(i);
        if (num / i != i) {
          divisor.push(num / i);
        }
      }
    }

    return divisor.length;
  };

  const divisorsLength = [];
  for (let i = 1; i <= number; i++) {
    divisorsLength.push(getDivisorLength(i));
  }

  const result = divisorsLength.reduce((acc, curr) => {
    const add = curr > limit ? power : curr;
    return acc + add;
  }, 0);

  return result;
}
