import sys
# from collections import deque
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

def dfs(graph, v, visited):
    visited[v] = True
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)

node, line = map(int, input().split())

graph = [[] for _ in range(node+1)]

for _ in range(line):
    u,v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

for i in range(node+1):
    graph[i].sort()

visited = [False]*(node+1)
count = 0

for i in range(1, node+1):
    if visited[i] == False:
        dfs(graph, i, visited)
        count += 1

print(count)