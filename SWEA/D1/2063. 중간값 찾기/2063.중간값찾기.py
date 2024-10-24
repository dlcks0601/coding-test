import sys
sys.stdin = open("input.txt", "r")

N = int(input())

numbers = list(map(int, input().split()))
numbers.sort()

middle_index = len(numbers) // 2

median_value = numbers[middle_index]

print(median_value)
