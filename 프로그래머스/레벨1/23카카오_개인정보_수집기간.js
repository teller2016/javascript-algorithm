/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/150370
 */
const getDay = (date) => {
  const dateArr = date.split(".");
  const year = parseInt(dateArr[0]) * 12 * 28;
  const month = parseInt(dateArr[1]) * 28;
  const day = parseInt(dateArr[2]);
  return year + month + day;
};

function solution(today, terms, privacies) {
  let result = [];
  let todayDay = getDay(today);

  const termDay = {};
  terms.forEach((term) => {
    const t = term.split(" ");
    termDay[t[0]] = parseInt(t[1]) * 28;
  });

  privacies.forEach((item, index) => {
    let privacy = item.split(" ");

    let day = getDay(privacy[0]);
    let plusDay = termDay[privacy[1]];

    if (day + plusDay <= todayDay) {
      result.push(index + 1);
    }
  });

  return result;
}
