import sys
sys.stdin = open("input.txt", "r")


def alphabet(input):
    result = []
    for alpha in input.strip():
        if alpha.isalpha():
            number = ord(alpha.lower()) - ord('a') + 1
            result.append(str(number))

    print(" ".join(result))


input = input().strip()
alphabet(input)
