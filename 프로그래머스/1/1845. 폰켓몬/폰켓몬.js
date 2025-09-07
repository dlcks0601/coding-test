function solution(nums) {
    // 연구실에 있는 총 n마리의 포켓몬 중에서 n/2마리를 가져가도 ㄱㅊ
    // 종류 번호로 구분함, 같은 종류 있을수도 있음
    // 다른 두 종류를 가져가 최대한 다양한 종류를 가져가라
    const pick = nums.length/2;
    const set = new Set()
    for(const type of nums) {
        set.add(type);
    }
    return Math.min(set.size, pick)
}