import sys
sys.stdin = open("input.txt", "r")

T = int(input())  # 테스트케이스 input

for test_case in range(1, T+1):

    P, Q, R, S, W = list(map(int, input().split()))

    a_case = P * W

    if W <= R:
        b_case = Q
    else:
        b_case = Q + (W - R) * S

    result = min(a_case, b_case)

    print(f"#{test_case} {result}")
