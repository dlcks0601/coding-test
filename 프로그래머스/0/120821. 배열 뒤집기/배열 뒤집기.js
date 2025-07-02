function solution(num_list) {
    let l = num_list.length;
    for (let i = 0; i < Math.floor(l / 2); i++) {
        const temp = num_list[i];
        num_list[i] = num_list[l-1-i];
        num_list[l-1-i] = temp;
    }
    return num_list
}

