function solution(park, routes) {
  const XMaxIndex = park.length - 1;
  const YMaxIndex = park[0].length - 1;

  let x = park.findIndex((item) => item.includes("S"));
  let y = park[x].indexOf("S");

  routes.forEach((route) => {
    const routeValue = route.split(" ");
    const direction = routeValue[0];
    const space = parseInt(routeValue[1]);

    let tempX = x;
    let tempY = y;
    let pass = true;

    for (let i = 0; i < space; i++) {
      switch (direction) {
        case "E":
          tempY++;
          break;
        case "W":
          tempY--;
          break;
        case "S":
          tempX++;
          break;
        case "N":
          tempX--;
          break;
      }

      if (
        tempX < 0 ||
        tempX > XMaxIndex ||
        tempY < 0 ||
        tempY > YMaxIndex ||
        park[tempX][tempY] == "X"
      ) {
        pass = false;
        break;
      }
    }

    if (pass) {
      x = tempX;
      y = tempY;
    }
  });

  return [x, y];
}

console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));
console.log(solution(["OXXO", "XSXO", "XXXX"], ["E 1", "S 1"]));
console.log(solution(["OOO", "OSO", "OOO", "OOO"], ["N 2", "S 2"]));
