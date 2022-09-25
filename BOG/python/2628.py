import sys

sys.stdin = open('example.txt', 'r')

# 예제 입력
# 10 8
# 3
# 0 3
# 1 4
# 0 2

input = sys.stdin.read().split('\n')

# print(input)

rectangle = input[0].strip().split()

width = int(rectangle[0]) # 가로
height = int(rectangle[1]) # 세로

# print(width, height) # 10 8

num = int(input[1])
# print(num) # 3

del input[0:2]
# print(input) # ['0 3', '1 4', '0 2']

widthLengths = [0, width]
heightLengths = [0, height]

for cut in input:
    cutDirection, cutLength = map(int, cut.strip().split())
    if cutDirection == 0:
        heightLengths.append(cutLength)
    else:
        widthLengths.append(cutLength)

heightLengths.sort()
widthLengths.sort()
answer = 0

for i in range(len(heightLengths)-1):
    for j in range(len(widthLengths)-1):
        answer = max(answer, (heightLengths[i + 1] - heightLengths[i]) * (widthLengths[j + 1] - widthLengths[j]))

print(answer)
        