function solution(s) {
  let answer = s.split(' ');
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].length > 0) {
      answer[i] = answer[i][0].toUpperCase() + answer[i].slice(1).toLowerCase();
    }
  }
  return answer.join(' ');
}
