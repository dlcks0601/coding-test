import sys
sys.stdin = open("input.txt", "r")

numbers = list(map(int, input().split()))

temp1 = numbers[0] + numbers[1]
temp2 = numbers[0] - numbers[1]
temp3 = numbers[0] * numbers[1]
temp4 = int(numbers[0] / numbers[1])

print(temp1)
print(temp2)
print(temp3)
print(temp4)
