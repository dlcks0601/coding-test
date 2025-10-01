function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] === goal[i]) {
      cards1.shift(); // cards1 맨 앞이 goal[i]와 같으면 꺼냄
    } else if (cards2[0] === goal[i]) {
      cards2.shift(); // cards2 맨 앞이 goal[i]와 같으면 꺼냄
    } else {
      return "No"; // 둘 다 해당하지 않으면 만들 수 없음
    }
  }
  return "Yes";
}