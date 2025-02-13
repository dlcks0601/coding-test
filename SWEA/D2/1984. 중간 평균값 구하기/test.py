import sys
sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T+1):
    arr = list(map(int, input().split()))

    max_val = max(arr)
    min_val = min(arr)

    total_sum = sum(arr) - max_val - min_val

    result = round(total_sum / 8)

    print(f"#{test_case} {result}")
