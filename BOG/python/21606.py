from sys import stdin, setrecursionlimit
setrecursionlimit(10**9)

stdin = open('example.txt', 'r')

def dfs(v, cnt): # v: 정점 번호, cnt : 실외와 연결된 실내 노드 개수 카운트
    visited[v] = True

    for i in graph[v]: # 노드 v와 연결된 인접 노드를 하나씩 불러온다
        if location[i] == 1: # 해당 노드의 위치가 실내이면
            cnt += 1 # 실내 개수 카운트에 +1 해준다.
        elif not visited[i] and location[i] == 0: # 방문하지 않았고, 해당 i점의 위치가 실외라면
            cnt = dfs(i, cnt) # 해당 실외점을 기준으로 dfs를 돈다
    return cnt

ans = 0
n = int(stdin.readline()) # 정점수 받기

# location 정보 받아오기 : 앞에 0이 추가되는 이유는 노드의 인덱스 번호를 1부터 시작하기 위해
location = [0]+list(map(int, stdin.readline().strip()))

graph = [[] for _ in range(n+1)] # 1번 노드부터 n번까지 받아오기위해 빈 공간 생성

for _ in range(n-1): 
    a, b = map(int, stdin.readline().split())
    graph[a].append(b)
    graph[b].append(a)
    if location[a] == 1 and location[b] == 1: # 둘다 실내이면
        ans +=2 # 서로 방문하는 케이스가 2가지이니 바로 2개 세기

sum = 0
visited = [False] * (n+1)
for i in range(1, n+1):
    if not visited[i] and location[i] == 0: # 실외를 기준으로
        x = dfs(i, 0) # 현재 cnt는 0
        sum += x*(x-1) # 실외인 노드를 기준으로 인접 노드 애들 개수 세는 것이 n * (n -1)이므로 실외 노드 걸릴때마다 전부 세기

print(sum+ans)