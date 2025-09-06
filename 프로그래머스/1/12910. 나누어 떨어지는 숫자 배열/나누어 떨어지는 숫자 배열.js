function solution(arr, divisor) {
    const answerArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answerArray.push(arr[i])
        }
    }
    if (answerArray.reduce((acc,cur) => acc + cur,0) === 0) {
        return [-1];
    }
    return answerArray.sort((a,b) => a-b)
}