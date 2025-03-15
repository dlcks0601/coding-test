function solution(n) {
  let jump = [1, 1];

  for (let i = 2; i <= n; i++) {
    jump[i] = (jump[i - 1] + jump[i - 2]) % 1234567;
  }

  return jump[n];
}
