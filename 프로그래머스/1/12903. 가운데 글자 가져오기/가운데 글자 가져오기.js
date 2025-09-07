function solution(s) {
    let array = s.split("");
    let answerArray = []
    console.log(array)
    if (array.length % 2 === 1) {
        // 3 -> 1이 중간 5 -> 2가 중간
        let middleArray = (parseInt(array.length/2))
        return (array[middleArray])
    } else {
        return array[array.length / 2 - 1] + array[array.length /2]
    }
}