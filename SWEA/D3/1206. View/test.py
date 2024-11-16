import sys
sys.stdin = open("input.txt", "r")

T = 10

for test_case in range(1, T+1):
    N = int(input())
    tower_list = list(map(int, input().split()))
    result = 0
    for i in range(2, N-2):
        max_tower = tower_list[i-2]
        for j in range(i-1, i+3):
            if j == i:
                continue
            else:
                if max_tower < tower_list[j]:
                    max_tower = tower_list[j]
        if tower_list[i] > max_tower:
            result += tower_list[i] - max_tower
    print(f"#{test_case} {result}")
