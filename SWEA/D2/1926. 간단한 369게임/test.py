import sys
sys.stdin = open("input.txt", "r")

# 입력 받기
N = int(input())

# 결과 저장 리스트
result = []

# 1부터 N까지 반복
for i in range(1, N + 1):
    # 숫자를 문자열로 변환하여 3, 6, 9 포함 여부 확인
    str_i = str(i)
    clap_count = str_i.count('3') + str_i.count('6') + str_i.count('9')

    if clap_count > 0:  # 3, 6, 9가 포함된 경우
        result.append('-' * clap_count)  # 박수 횟수만큼 - 추가
    else:  # 포함되지 않은 경우 숫자 그대로 추가
        result.append(str_i)

# 결과 출력 (공백으로 구분)
print(' '.join(result))
