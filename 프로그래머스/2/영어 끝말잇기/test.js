function solution(n, words) {
  let used = [];

  for (let i = 0; i < words.length; i++) {
    let curr = words[i];
    let prev = words[i - 1];

    if (used.includes(curr) || (i > 0 && prev[prev.length - 1] !== curr[0])) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    used.push(curr);
  }

  return [0, 0];
}

function solution(n, words) {
  let used = new Set();
  used.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    let prev = words[i - 1];
    let curr = words[i];
    if (used.has(curr) || prev[prev.length - 1] !== curr[0]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    used.add(curr);
  }

  return [0, 0];
}
