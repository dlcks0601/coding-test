function solution(array, commands) {
  // i번째 숫자부터 - j번째 숫자 자르고 정렬 -> k번째 숫자 추출
  // 2번째 부터 5번째 숫자 자르고 정렬 -> 3번째 숫자 추출
  // [5,2,6,3] -> [2,3,5,6] -> 5 여기서는 sort() 함수 사용
  const answer = [];

  for (let i = 0; i < commands.length; i++) {
    const slice = array.slice(commands[i][0] - 1, commands[i][1]);
    const sorted = slice.sort((a, b) => a - b);
    answer.push(sorted[commands[i][2] - 1]);
  }
  return answer;
}