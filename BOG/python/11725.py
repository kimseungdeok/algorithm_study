from sys import stdin, setrecursionlimit
setrecursionlimit(10**6)

stdin = open('example.txt', 'r')

node = int(stdin.readline().strip()) 
graph = [[] for _ in range(node+1)]
visited = [-1]*(node+1)

for _ in range(node-1):
    u, v = map(int, stdin.readline().split())
    graph[u].append(v)
    graph[v].append(u)


def dfs(graph, v, visited):
    for i in graph[v]:
        if visited[i] == -1:
            visited[i] = v
            dfs(graph, i, visited)

dfs(graph, 1, visited)

for i in range(2, node+1):
    print(visited[i])
