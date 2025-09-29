function solution(a, b, n) {
    // 콜라 빈 병 2개 -> 콜라 1병, 빈 병 20개 -> 콜라 10개
    // 보유 중인 빈 병이 2개 미만 -> 콜라 x
    // 콜라 총 받을 수 있는 것
    // 반복 문
    // 빈 병 a 개 -> b 개 줌
    // 빈 병 개수 n
    let answer = 0;
    while (n >= a) {
        const change = Math.floor(n / a) * b;
        answer += change;
        n = change + (n % a);
    }
    return answer;
}