import sys
sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T+1):

    numbers = list(map(int, input().split()))

    answer = numbers[0] // numbers[1]
    subanswer = numbers[0] % numbers[1]

    print(f"#{test_case} {answer} {subanswer}")
