function solution(x) {
  let sumOfDigits = 0;
  let temp = x;
  while (temp > 0) {
    sumOfDigits = sumOfDigits + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return x % sumOfDigits === 0;
}
