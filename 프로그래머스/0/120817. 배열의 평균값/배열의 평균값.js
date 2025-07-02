function solution(numbers) {
    let sum = 0;
    let answer = 0;
    const l = numbers.length;
    for (let i = 0; i < l; i++) {
        sum += numbers[i];
    }
    return answer = sum / l;
}