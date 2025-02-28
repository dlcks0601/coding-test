function solution(n) {
  const rF = 1234567; // 나눗셈 기준값
  let a = 0,
    b = 1; // 초기값
  for (let i = 2; i <= n; i++) {
    // 2부터
    let temp = (a + b) % rF; // 새로운 피보나치 수 계산
    a = b;
    b = temp;
  }
  return b;
}
