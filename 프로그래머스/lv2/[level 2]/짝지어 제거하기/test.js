function solution(s) {
  let stack = [];

  for (let char of s) {
    // 문자 탐색
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop(); // 같은 문자가 있으면 제거
    } else {
      stack.push(char); // 없으면 추가
    }
  }

  return stack.length === 0 ? 1 : 0; // 스택 x -> 1, 스택 o -> 0
}
