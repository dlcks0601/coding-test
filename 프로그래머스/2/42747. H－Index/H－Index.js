function solution(citations) {
    citations.sort((a, b) => a - b);
    
    let n = citations.length;
    let hIndex = 0;
    

    for (let i = 0; i < n; i++) {
        let h = n - i; 
        if (citations[i] >= h) { 
            hIndex = h;
            break;
        }
    }
    
    return hIndex;
}