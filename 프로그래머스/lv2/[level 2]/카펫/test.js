function solution(brown, yellow) {
  let total = brown + yellow; // 타일 개수

  for (let h = 3; h <= total / h; h++) {
    // 최소 높이 3
    if (total % h === 0) {
      let w = total / h;

      if ((w - 2) * (h - 2) === yellow) {
        // 노란색 타일 배치
        return [w, h]; // 가로 세로 반환
      }
    }
  }
}
