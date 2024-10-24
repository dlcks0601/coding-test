import sys
sys.stdin = open("input.txt", "r")

password = list(map(int, input().split()))

P = password[0]
K = password[1]

attempts = (P - K) + 1

print(attempts)
