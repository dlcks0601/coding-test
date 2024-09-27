function solution(input_string) {
    const lonely = new Set();
    const visited = new Set();

    let prev = '';

    for (let i = 0; i < input_string.length; i++) {
        const current = input_string[i];

        if (visited.has(current) && prev !== current) {
            lonely.add(current);
        }

        visited.add(current);
        prev = current;
    }

    const result = Array.from(lonely).sort().join('');

    return result.length > 0 ? result : 'N';
}
