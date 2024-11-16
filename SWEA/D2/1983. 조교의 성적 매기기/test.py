import sys
sys.stdin = open("input.txt", "r")

T = int(input())

grades = ['A+', 'A0', 'A-', 'B+', 'B0', 'B-', 'C+', 'C0', 'C-', 'D0']

for test_case in range(1, T+1):
    N, K = map(int, input().split())
    scores = []

    for i in range(N):
        midterm, final, homework = map(int, input().split())
        total = midterm * 0.35 + final * 0.45 + homework * 0.2
        scores.append(total)

    target_score = scores[K-1]

    rank = 0
    for score in scores:
        if score > target_score:
            rank += 1

    students_per_grade = N // 10
    grade_index = rank // students_per_grade

    print(f"#{test_case} {grades[grade_index]}")
