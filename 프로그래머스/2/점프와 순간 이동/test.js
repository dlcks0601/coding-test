function solution(n) {
  let battery = 0;

  while (n > 0) {
    // n 은 거리
    if (n % 2 === 0) {
      // 거리가 짝수일 때 -> 온 거리 * 2
      n /= 2;
    } else {
      n -= 1; // 점프 1 -> 건전지 -1
      battery++;
    }
  }

  return battery;
}
