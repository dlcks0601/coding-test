import sys
sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T+1):
    numbers = list(map(int, input().split()))
    odd_sum = sum(num for num in numbers if num % 2 == 1)
    print(f'#{test_case} {odd_sum}')
