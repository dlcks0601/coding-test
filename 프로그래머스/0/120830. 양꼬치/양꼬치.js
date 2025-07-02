function solution(n, k) {
    const s = Math.floor(n / 10)
    const tn = 12000 * n;
    const tk = 2000 * (k - s)
    return (tn + tk)
}