from collections import deque
from sys import stdin
import heapq

stdin = open('example.txt', 'r')

# 수업 시간을 큐에 넣음
# 가장 처음 값이 들어오는 값이랑 같으면 count를 안함

inputNum = int(stdin.readline().strip())

lecQue = deque([])
count = 0

lecList = [list(map(int, stdin.readline().split())) for _ in range(inputNum)]

lecList.sort()

lecQue = []
heapq.heappush(lecQue, lecList[0][1])

for i in range(1, inputNum):
    if lecList[i][0] < lecQue[0]:
        heapq.heappush(lecQue, lecList[i][1])
    else:
        heapq.heappop(lecQue)
        heapq.heappush(lecQue, lecList[i][1])
    
print(len(lecQue))

