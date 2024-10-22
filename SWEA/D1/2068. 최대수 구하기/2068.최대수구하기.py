# 첫번째 풀이

# import sys
# sys.stdin = open("input.txt", "r")

# T = int(input())

# for test_case in range(1, T + 1):
#     numbers = list(map(int, input().split()))
#     max_number = numbers[0]

#     for num in numbers:
#         if num > max_number:
#             max_number = num
# 결과 출력


import sys
sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T+1):
    numbers = list(map(int, input().split()))
    max_number = max(numbers)
    print(f'#{test_case} {max_number}')
