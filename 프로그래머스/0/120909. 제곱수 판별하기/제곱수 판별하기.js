function solution(n) {
    for (let i = 1; i < n; i++) {
        if (n / i === i) {
            return 1;
        }
    }
    return 2;
}