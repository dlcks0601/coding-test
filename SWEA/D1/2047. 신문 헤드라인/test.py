import sys
sys.stdin = open("input.txt", "r")


def headline(input):
    result = input.upper()
    print(result)


input = input().strip()
headline(input)
