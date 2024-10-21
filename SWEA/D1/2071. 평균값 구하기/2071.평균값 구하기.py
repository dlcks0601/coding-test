# 첫번째 풀이

# import sys
# sys.stdin = open("input.txt", "r")

# T = int(input())

# for test_case in range(1, T+1):
#     numbers = list(map(int, input().split()))
#     odd_numbers = sum(num for num in numbers)
#     avg = int(odd_numbers / len(numbers))

#     print(f'#{test_case} {avg}')


# 두번째 풀이

import sys
sys.stdin = open("input.txt", "r")

T = int(input())  # 테스트 케이스의 개수 입력

for test_case in range(1, T + 1):
    numbers = list(map(int, input().split()))  # 10개의 숫자를 입력받아 리스트로 변환
    avg = round(sum(numbers) / len(numbers))  # 평균을 구한 후 반올림
    print(f'#{test_case} {avg}')  # 결과 출력
