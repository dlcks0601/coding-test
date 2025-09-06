function solution(s) {
    if (s.length !== 4 && s.length !== 6 ) {
        return false;
    }
    const array = s.split("");
    console.log(array);
    for (let i = 0; i<array.length; i++) {
        if(isNaN(array[i])) {
            return false;
        }
    } 
    return true;
}