function solution(numbers) {
    let sum = 0;
    let answer = 0;
    let answerSum =0;
    for (let i = 0; i <= 9; i++ ) {
        sum += i;
    }
    console.log(sum)
    answerSum = numbers.reduce((acc, cur) => acc + cur,0);
    console.log(answerSum)
    return answer = sum - answerSum
}