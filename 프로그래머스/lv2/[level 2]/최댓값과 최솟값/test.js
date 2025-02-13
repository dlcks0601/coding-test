function solution(s) {
  const numbers = s.split(' ').map(Number);
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return `${min} ${max}`;
}

console.log(solution('1 2 3 4')); // "1 4"
console.log(solution('-1 -2 -3 -4')); // "-4 -1"
console.log(solution('-1 -1')); // "-1 -1"
