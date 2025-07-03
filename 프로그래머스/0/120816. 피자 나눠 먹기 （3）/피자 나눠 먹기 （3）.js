function solution(slice, n) {
  if (n % slice !== 0) {
    return parseInt(n / slice) + 1;
  } else {
    return n / slice;
  }
}