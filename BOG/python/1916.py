import sys
from heapq import heappush, heappop
import heapq
input = sys.stdin.readline
INF = int(1e9)

##### input #####
city = int(input())
bus = int(input())

graph = [[] for _ in range(city+1)]
# visited = [False] * (city+1)
distance = [INF] * (city+1)

for _ in range(bus):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))
    # (목적지, 최소비용)

start, end = map(int, input().split())

##### 함수 #####
def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0
    
    while q: 
        dist, now = heapq.heappop(q)
        if distance[now] < dist:
            continue
        
        if now == end:
            return

        for i in graph[now]:
            cost = dist + i[1]
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))


##### 메인 #####
dijkstra(start)
print(distance[end])