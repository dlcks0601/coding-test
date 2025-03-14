function solution(x, n) {
  var answer = [];
  let add = 0;
  for (let i = 0; i < n; i++) {
    add += x;
    answer.push(add);
  }
  return answer;
}
