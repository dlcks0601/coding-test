function solution(arr) {
    // 가장 작은 수 제거 만약 리턴하려는 배열이 빈 경우엔 배열에 -1 채워 리턴
    const min = Math.min(...arr);
    let answerArr = []
    if (arr.length > 1) {
        return arr.filter(num => num !== min)
    }
    else {
        return [-1];
    }
}