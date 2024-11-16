import sys
sys.stdin = open("input.txt", "r")

# 테스트 케이스 개수 입력
T = int(input())

for test_case in range(1, T + 1):
    word = input().strip()  # 단어 입력받기
    if word == word[::-1]:  # 단어와 뒤집은 단어를 비교
        result = 1  # 회문이면 1
    else:
        result = 0  # 아니면 0

    # 결과 출력
    print(f"#{test_case} {result}")
