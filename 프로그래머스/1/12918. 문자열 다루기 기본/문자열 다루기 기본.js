// 문자열 다루기 기본
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  for (const char of s) {
    if (isNaN(char)) {
      return false;
    }
  }
  return true;
}