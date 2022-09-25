import sys

sys.stdin = open('example.txt', 'r')

# 예제 입력
# 10 8
# 3
# 0 3
# 1 4
# 0 2

input = sys.stdin.read().split('\n')

print(input)

rectangle = input[0].split()

width = int(rectangle[0]) # 가로
height = int(rectangle[1]) # 세로

# print(width, height) # 10 8

num = int(input[1])
# print(num) # 3

del input[0:2]
# print(input) # ['0 3', '1 4', '0 2']

cutWidthLengths = []
cutHeightLengths = []

for cut in input:
    cutDirection, cutLength = map(int, cut.split())
    print(cutDirection, cutLength)
    if cutDirection == 0:
        cutHeightLengths.append
        
    