# [level 0] 두 수의 나눗셈 - 120806

https://school.programmers.co.kr/learn/courses/30/lessons/120806

### 문제설명

정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

### 제한 사항

- 0 < num1 ≤ 100
- 0 < num2 ≤ 100

### 입출력 예

| num1 | num2 | result |
| ---- | ---- | ------ |
| 3    | 2    | 1500   |
| 7    | 3    | 2333   |
| 1    | 16   | 62     |

### 다른 사람의 풀이

#### 1.

```
function solution(num1, num2) {
    return Math.trunc(num1 / num2 * 1000);
    //trunc 메서드 -> 소주점 이하는 다 버린다. Math.floor() 소수점 이하를 내린다.
}
```

#### 2.

```
const solution = (num1, num2) => Math.floor(num1 / num2 * 1000)

```
