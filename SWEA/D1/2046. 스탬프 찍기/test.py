import sys
sys.stdin = open("input.txt", "r")

N = int(input())

if 0 <= N <= 100000:
    print('#' * N)
