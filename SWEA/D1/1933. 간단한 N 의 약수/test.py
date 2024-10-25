import sys
sys.stdin = open("input.txt", "r")

N = int(input())

divs = []

for i in range(1, N+1):
    if N % i == 0:
        divs.append(i)

print(*divs)
