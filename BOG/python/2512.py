from sys import stdin

stdin = open('example.txt', 'r')
input = stdin.readline

N = int(input()) # 지방의 수
arr = list(map(int,input().split())) # 각 지방 예산
arr.sort()
M = int(input()) # 총 예산

start, end = 0, max(arr)


while start <= end:
    mid = (start + end)//2
    num = 0
    for i in arr:
        if i >= mid:
            num += mid
        else:
            num += i
    if num <= M:
        start = mid +1
    else:
        end = mid-1
print(end)
    