from sys import stdin, stdout

stdin = open('example.txt','r')

N = int(stdin.readline().strip())
nArr = sorted(list(map(int, stdin.readline().strip().split())))
M = int(stdin.readline().strip())
mArr = list(map(int, stdin.readline().strip().split()))


# print(N, nArr, M, mArr)
def findEl(el, nArr, start, end):
    if start > end:
        return 0
    mid = (start+end)//2
    if el == nArr[mid]:
        return 1
    elif el < nArr[mid]:
        return findEl(el, nArr, start, mid-1)
    else:
        return findEl(el, nArr, mid+1, end)

for el in mArr:
    start = 0
    end = len(nArr) -1
    print(findEl(el, nArr, start, end))
