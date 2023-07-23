import heapq
from sys import stdin

stdin = open('example.txt', 'r')

inputNum = int(stdin.readline().strip())

road_info = []
for _ in range(inputNum):
    road = list(map(int, stdin.readline().split()))
    road_info.append(road)

d = int(stdin.readline())
roads = []
for road in road_info:
    house, office = road
    if abs(house - office) <= d:
        road = sorted(road)
        roads.append(road)
roads.sort(key=lambda x:x[1])

answer = 0
heap = []
for road in roads:
    if not heap:
        heapq.heappush(heap, road)
    else:
        while heap[0][0] < road[1] -d:
            heapq.heappop(heap)
            if not heap:
                break
        heapq.heappush(heap, road)
    answer = max(answer, len(heap))
print(answer)