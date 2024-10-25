import sys
sys.stdin = open("input.txt", "r")

N = int(input())

divs = []
result = 1

for i in range(N+1):
    divs.append(result)
    result *= 2


print(*divs)

# divs = [2**i for i in range(N + 1)]
