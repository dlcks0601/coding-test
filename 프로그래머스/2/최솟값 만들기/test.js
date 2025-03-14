function solution(A, B) {
  A.sort((a, b) => a - b); // 내림
  B.sort((a, b) => b - a); // 오름
  let sum = 0;
  for (i = 0; i < A.length; i++) {
    sum += A[i] * B[i];
  }
  return sum;
}
