import sys
sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T+1):

    N = int(input())

    drop = list(map(int, input().split()))

    min_distance = float('inf')
    count = 0

    for pos in drop:
        drop = abs(pos)

        if drop < min_distance:
            min_distance = drop
            count = 1

        elif drop == min_distance:
            count += 1

    print(f"{test_case} {min_distance} {count}")
