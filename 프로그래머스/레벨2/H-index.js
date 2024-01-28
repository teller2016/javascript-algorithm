/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42747
 *
 * 풀이: 정렬
 */

function solution(citations) {
  citations = citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    const curr = citations[i];

    if (curr < i + 1) return i;
  }

  return citations.length;
}
