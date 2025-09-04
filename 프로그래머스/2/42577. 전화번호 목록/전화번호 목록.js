function solution(phone_book) {
  // 해시 테이블 생성
  const hash = new Set(phone_book);

  // 각 전화번호의 모든 가능한 접두사 확인
  for (let phone of phone_book) {
    for (let i = 1; i < phone.length; i++) {
      const prefix = phone.substring(0, i);
      if (hash.has(prefix)) {
        return false;
      }
    }
  }
  return true;
}