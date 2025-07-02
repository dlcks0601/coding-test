function solution(message) {
    // 글자 한 자를 가로 2cm, 가로로만 작성, message = 14
    // 공백도 하나의 문자로 취급
    let textArray= message.split("")
    return textArray.length * 2
}