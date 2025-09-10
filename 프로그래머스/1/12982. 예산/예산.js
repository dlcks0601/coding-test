function solution(d, budget) {
    // 각 부서별로 물풀 구매 필요 금액 조사
    // 전체 예상 정해짐
    // 모든 부서 물품 x
    // 최대한 많은 부서 물품
    // 물품 구매 -> 각 부서가 신청한 금액만큰 모두 지원
    // 부서별 금액 배열 : d
    // 예산 : buget
    // 최대 몇 개의 부서 물품 지원
    // buget에서 d 계속 차감해야할듯 그리고 count도 같이
    let array = d.sort((a,b) => a- b);
    let sum = 0;
    let count = 0;
    
    for (let i = 0; i < d.length; i++) {
        if (sum + array[i] <= budget) {
            sum += array[i]
            count ++
        } else{
            break;
        }
    }
    return count;
}