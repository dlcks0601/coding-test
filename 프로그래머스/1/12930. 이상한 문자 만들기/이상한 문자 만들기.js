function solution(s) {
    const words = s.split(' ');
    const result = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const char = word.split("");
        for (let j = 0; j < char.length; j++) {
            if(j % 2 === 0) {
                char[j] = char[j].toUpperCase();
            } else {
                char[j] = char[j].toLowerCase();
            }
        }
        result.push(char.join(''))
    }
    return result.join(' ')
}