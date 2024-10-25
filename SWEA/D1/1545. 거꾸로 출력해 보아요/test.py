import sys
sys.stdin = open("input.txt", "r")

N = int(input())

result = []

for i in range(N, -1, -1):
    result.append(i)

print(*result)
