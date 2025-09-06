function solution(numbers) {
  // 모든 원소가 0인 경우 "0" 반환
  if (numbers.every((num) => num === 0)) {
    return "0";
  }

  // 숫자를 문자열로 변환
  const stringNumbers = numbers.map((num) => num.toString());

  // 문자열 연결 비교를 통한 정렬
  // b + a와 a + b를 비교하여 더 큰 수가 앞에 오도록 정렬
  stringNumbers.sort((a, b) => {
    return b + a - (a + b);
  });

  return stringNumbers.join("");
}