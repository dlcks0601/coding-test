function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    const substring = t.slice(i, i + p.length);
    if (Number(substring) <= Number(p)) {
      count++;
    }
  }
  return count;
}