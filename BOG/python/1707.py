from sys import stdin, setrecursionlimit
setrecursionlimit(10**6)

stdin = open('example.txt', 'r')

def dfs(v, group):
    visited[v] = group # 방문한 노드에 group 할당
    for i in graph[v]:
        if visited[i] == 0: # 아직 안 가본 곳이면 방문
            if not dfs(i, -group):
                return False
        elif visited[i] == visited[v]: # 방문한 곳인데, 그룹이 동일하면 False
            return False
    return True

for _ in range(int(stdin.readline().strip())):
    v, e = map(int, stdin.readline().strip().split())
    graph = [[] for i in range(v+1)] # 빈 그래프 생성
    visited = [0] * (v+1) # 방문한 정점 체크

    for _ in range(e):
        a, b = map(int, stdin.readline().strip().split())
        graph[a].append(b) # 무방향 그래프
        graph[b].append(a) # 무방향 그래프

    bipatitle = True

    for i in range(1, v+1):
        if visited[i] == 0: # 방문한 정점이 아니면, dfs 수행
            bipatite = dfs(i, 1)
            if not bipatite:
                break
    print('YES' if bipatite else 'NO')
