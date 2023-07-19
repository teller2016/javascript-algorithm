/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/161990
 */
function solution(wallpaper) {
  let answer = [];

  let top = 51;
  let left = 51;
  let bottom = 0;
  let right = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] != "#") continue;
      top = Math.min(top, i);
      left = Math.min(left, j);
      bottom = Math.max(bottom, i);
      right = Math.max(right, j);
    }
  }

  return [top, left, bottom + 1, right + 1];
}

console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
);
