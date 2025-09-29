function solution(s) {
    // 대응되는 영단어 필요
    // 영단어 key, value key -> value로 변환
    // split으로 구분
  const dict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
for (let key in dict) {
  s = s.replaceAll(key, dict[key]);
}
  return parseInt(s);
}