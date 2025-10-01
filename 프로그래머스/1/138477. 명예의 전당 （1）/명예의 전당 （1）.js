function solution(k, score) {
  let answer = [];
  let rank = [];

  for (let i = 0; i < score.length; i++) {
    rank.push(score[i]);

    rank.sort((a, b) => b - a);

    if (rank.length > k) {
      rank.pop();
    }
    answer.push(rank[rank.length - 1]);
  }

  return answer;
}