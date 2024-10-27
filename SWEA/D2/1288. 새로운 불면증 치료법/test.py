import sys
sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T+1):
    N = int(input())  # 여기까지 맞춤
    result = set()
    multiplier = 0

    while len(result) < 10:
        multiplier += 1
        number = N * multiplier
        result.update(str(number))

    print(f"#{test_case} {number}")
