from sys import stdin
import heapq

stdin = open('example.txt','r')

n = int(stdin.readline().strip())

leftHeap = []
rightHeap = []
answer = []

for _ in range(n):
    inputNum = int(stdin.readline().strip())

    if len(leftHeap) == len(rightHeap):
        heapq.heappush(leftHeap, (-inputNum, inputNum))
    else:
        heapq.heappush(rightHeap, (inputNum, inputNum))
    
    if rightHeap and leftHeap[0][1] > rightHeap[0][0]:
        min = heapq.heappop(rightHeap)[1]
        max = heapq.heappop(leftHeap)[1]
        heapq.heappush(leftHeap, (-min, min))
        heapq.heappush(rightHeap, (max, max))
        
    answer.append(leftHeap[0][1])

for el in answer:
    print(el)

