import sys
sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T+1):
    N, M = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]

    ans = 0

    for si in range(N-M+1):
        for sj in range(N-M+1):
            cnt = 0
            for i in range(si, si+M):
                for j in range(sj, sj+M):
                    cnt += arr[i][j]
            if ans < cnt:
                ans = cnt
    print(f"#{test_case} {ans}")


# import sys
# sys.stdin = open("input.txt", "r")

# # 테스트 케이스의 개수 입력
# T = int(input())

# for test_case in range(1, T + 1):
#     # N: 배열 크기, M: 파리채 크기
#     N, M = map(int, input().split())

#     # N x N 배열 입력 받기
#     grid = [list(map(int, input().split())) for _ in range(N)]

#     max_flies = 0  # 죽일 수 있는 최대 파리의 수

#     # 가능한 모든 M x M 영역을 검사
#     for i in range(N - M + 1):
#         for j in range(N - M + 1):
#             # M x M 크기의 파리 수 합계 계산
#             fly_sum = 0
#             for x in range(M):
#                 for y in range(M):
#                     fly_sum += grid[i + x][j + y]

#             # 최대 파리 수 갱신
#             max_flies = max(max_flies, fly_sum)

#     # 결과 출력
#     print(f"#{test_case} {max_flies}")
