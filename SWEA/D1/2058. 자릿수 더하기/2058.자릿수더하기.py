import sys
sys.stdin = open("input.txt", "r")

N = int(input())

digit_sum = sum(map(int, str(N)))

print(digit_sum)
