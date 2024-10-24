import sys
sys.stdin = open("input.txt", "r")

month_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

T = int(input())

for test_case in range(1, T+1):

    date = input().strip()

    year = int(date[:4])
    month = int(date[4:6])
    day = int(date[6:])

    if 1 <= month <= 12:

        max_days = month_days[month]

        if 1 <= day <= max_days:
            print(f"#{test_case} {year:04}/{month:02}/{day:02}")
        else:
            print(f"#{test_case} -1")

    else:
        print(f"#{test_case} -1")
