function solution(n) {
  let str = String(n);
  let array = str.split('');
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += Number(array[i]);
  }
    return sum
}