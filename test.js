function solution(array, height) {
  array.sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      count++;
    }
  }
  return count;
}

solution([149, 180, 192, 170], 167);
