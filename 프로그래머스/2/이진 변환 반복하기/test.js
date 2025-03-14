function solution(s) {
  let count = 0;
  let removed = 0;

  while (s !== '1') {
    let zeroCount = s.split('0').length - 1;
    removed += zeroCount;
    s = s.replace(/0/g, '');
    s = s.length.toString(2);
    count++;
  }
  return [count, removed];
}
