function solution(n) {
  // 숫자를 문자열로 변환하여 각 자릿수에 접근
  const digits = String(n).split("");
  // 각 자릿수를 숫자로 변환하여 합계 계산
  const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
  return sum;
}