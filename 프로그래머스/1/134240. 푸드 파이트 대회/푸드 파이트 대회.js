function solution(food) {
    let answer = '';
    let reverse = ''
    for (let i = 1; i < food.length; i++) {
        answer += String(i).repeat(Math.floor(food[i] / 2))
    }
    reverse =  answer.split('').reverse().join('')
    return answer + '0' + reverse
}