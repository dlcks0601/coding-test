import sys
sys.stdin = open("input.txt", "r")

# N = int(input())

# total = 0

# for i in range(1, N + 1):
#     total += i

# print(total)

N = int(input())

total = N * (N+1) // 2

print(total)
