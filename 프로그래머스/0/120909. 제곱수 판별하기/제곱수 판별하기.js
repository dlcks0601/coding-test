function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n / i === i) {
      return 1;
    }
  }
  return 2;
}

// function solution(n) {
//     return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
// }
