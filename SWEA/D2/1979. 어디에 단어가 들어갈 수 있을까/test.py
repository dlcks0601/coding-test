import sys
sys.stdin = open("input.txt", "r")

T = int(input())  # 테스트 케이스 수 입력

for test_case in range(1, T + 1):
    N, K = map(int, input().split())  # N: 퍼즐 크기, K: 단어 길이
    puzzle = [list(map(int, input().split())) for _ in range(N)]  # 퍼즐 입력

    def count_positions(puzzle):
        count = 0
        for line in puzzle:  # 각 행 또는 열에서 탐색
            spaces = "".join(map(str, line)).split("0")  # 연속된 1의 덩어리 추출
            count += spaces.count("1" * K)  # 길이가 K인 연속된 1의 개수 세기
        return count

    # 가로 방향 + 세로 방향 합산
    horizontal = count_positions(puzzle)
    vertical = count_positions(zip(*puzzle))  # 전치 행렬로 세로 탐색
    result = horizontal + vertical

    print(f"#{test_case} {result}")
