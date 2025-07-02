function solution(n) {
    // n = 사람 수
    // 한 조각 이상 먹기 위해 필요한 피자수
    // 만약 15 명 -> 3판 시켜야함
    // n % 7 나머지가 생기면 +1
    // n % 7 x -> 그대로 출력?
    if (n % 7 !== 0) {
        return parseInt(n / 7) + 1
    } else {
        return n / 7
    }
}