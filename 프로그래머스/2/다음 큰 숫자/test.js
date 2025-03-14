function solution(n) {
  let count = n.toString(2).split('1').length - 1; // n 1개수

  while (true) {
    n++; // n증가
    if (n.toString(2).split('1').length - 1 === count) {
      return n; // 1개수 같으면 반환
    }
  }
}
