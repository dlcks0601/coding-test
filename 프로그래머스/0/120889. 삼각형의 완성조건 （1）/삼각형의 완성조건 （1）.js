function solution(sides) {
  sides.sort((a, b) => b - a);
  if (sides[2] + sides[1] > sides[0]) {
    return 1;
  } else {
    return 2;
  }
}