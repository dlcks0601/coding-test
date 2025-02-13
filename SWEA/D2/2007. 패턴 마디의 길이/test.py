import sys
sys.stdin = open("input.txt", "r")

# 테스트 케이스 개수 입력
T = int(input())

for test_case in range(1, T + 1):
    string = input().strip()  # 길이 30인 문자열
    pattern_length = 0  # 마디의 길이

    # 1부터 10까지의 길이를 탐색
    for length in range(1, 11):
        # 첫 length 길이의 문자열이 패턴인지 확인
        pattern = string[:length]
        if pattern * (30 // length) == string[:length * (30 // length)]:
            pattern_length = length
            break

    # 결과 출력
    print(f"#{test_case} {pattern_length}")
