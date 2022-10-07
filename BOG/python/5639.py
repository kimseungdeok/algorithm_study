from sys import stdin
from sys import setrecursionlimit

setrecursionlimit(10**6)
# 입력 예제 1
# 50
# 30
# 24
# 5
# 28
# 45
# 98
# 52
# 60

stdin = open('example.txt', 'r')

numList = []

while True:
    try:
        num = int(stdin.readline())
        numList.append(num)
    except:
        break
 
def postorder(first, end):
    if first > end:
        return
    mid = end + 1 # root보다 큰 값이 존재하지 않을 경우를 대비
    for i in range(first+1, end+1):
        if numList[first] < numList[i]:
            mid = i
            break
    postorder(first+1, mid-1)
    postorder(mid, end)
    print(numList[first])

postorder(0, len(numList)-1)