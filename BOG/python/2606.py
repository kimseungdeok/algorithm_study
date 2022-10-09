from sys import stdin

stdin = open('example.txt', 'r')

visitArr = []
def dfs(graph, v, visited):
    visited[v] = True
    for i in graph[v]:
        if not visited[i]:
            # print(i)
            visitArr.append(i)
            dfs(graph, i, visited)
            # return visitArr



node = int(stdin.readline().strip())
line = int(stdin.readline().strip())

graph = [[] for _ in range(node+1)]

for _ in range(line):
    u, v = map(int, stdin.readline().split())
    graph[u].append(v)
    graph[v].append(u)

for i in range(node+1):
    graph[i].sort()

visited = [False]*(node+1)

# print(graph)

# for i in range(1, node+1):
#     if visited[i] == False:
#         dfs(graph, i, visited)


dfs(graph, 1, visited)
print(len(visitArr))