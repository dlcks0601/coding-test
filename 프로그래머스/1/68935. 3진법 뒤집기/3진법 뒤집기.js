function solution(n) {
  let str = n.toString(3);
  let reverse = str.split('').reverse().join('');
  let result = parseInt(reverse, 3);
  console.log(result);
  return result;
}