function solution(price, money, count) {
    // 3,20,4
    // 기본료 3 돈은 20 count는 4
    // 처음 3 두번째 6 세번째 9 -> price에 count 그리고 합을 누적시켜야함 -> 그러지말고 바로바로 money에서 빼자 -> 3+6+9+12 = 30임 모자른돈 10! sum에서 - money 리턴
    let sum = 0;
    let totalPrice = 0;
    for (let i = 1; i <=count ; i++ ){
        totalPrice = price * i;
        sum += totalPrice
    }
    console.log(sum);
    if (sum - money > 0) {
        return sum - money;
    } else {
        return 0;
    }
}