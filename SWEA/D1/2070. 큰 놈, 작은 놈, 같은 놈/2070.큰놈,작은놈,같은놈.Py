import sys
sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T+1):
    numbers = list(map(int, input().split()))
    if numbers[0] > numbers[1]:
        result = ">"
    elif numbers[0] < numbers[1]:
        result = "<"
    else:
        result = "="

    print(f'#{test_case} {result}')
