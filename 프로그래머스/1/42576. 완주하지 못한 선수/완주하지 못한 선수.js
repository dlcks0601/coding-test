function solution(participant, completion) {
  const map = new Map();

  // completion 배열의 각 선수를 맵에 카운트
  for (const name of completion) {
    map.set(name, (map.get(name) || 0) + 1);
  }

  // participant 배열을 순회하며 맵에서 차감
  for (const name of participant) {
    const count = map.get(name);
    if (!count) {
      // 맵에 없거나 카운트가 0이면 완주하지 못한 선수
      return name;
    }
    map.set(name, count - 1);
  }
}