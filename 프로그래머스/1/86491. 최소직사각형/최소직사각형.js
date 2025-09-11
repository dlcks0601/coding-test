function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (let i = 0; i < sizes.length; i++) {
    // 각 명함을 회전시켜서 가로는 큰 값, 세로는 작은 값으로 정규화
    const width = Math.max(sizes[i][0], sizes[i][1]);
    const height = Math.min(sizes[i][0], sizes[i][1]);

    // 전체 명함들 중 최대 가로와 최대 세로를 찾음
    maxWidth = Math.max(maxWidth, width);
    maxHeight = Math.max(maxHeight, height);
  }

  return maxWidth * maxHeight;
}

// 가장 긴 가로 : 80
// 가장 긴 세로 : 70
// 80 x 70 지갑은 다 수납 가능.
// 80 x 50 은 다 커버 가능

// 지갑의 크기가 정답임.