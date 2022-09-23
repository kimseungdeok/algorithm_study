import sys
sys.stdin = open('example.txt', 'r')

input = sys.stdin.read().splitlines()

firstNum = int(input[0])
secondNum = int(input[1])
secondNums = list(input[1]) # 두번째 숫자를 나누어서 배열로 만듦

print(firstNum * int(secondNums[2]))
print(firstNum * int(secondNums[0]))
print(firstNum * int(secondNums[1]))
print(firstNum * secondNum)

