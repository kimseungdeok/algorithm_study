# 문제 이름 : 이모티콘
# 문제 번호 : 14226
# 문제 주소 : https://www.acmicpc.net/problem/14226

from sys import stdin
from collections import deque
stdin = open('example.txt', 'r')
input = stdin.readline
n = int(input().strip())
dist = [[-1] * (n + 1) for _ in range(n + 1)]

q = deque()
q.append((1, 0))
dist[1][0] = 0
while q:
    s, c = q.popleft()
    if dist[s][s] == -1:
        dist[s][s] = dist[s][c] + 1
        q.append((s, s))
    if s + c <= n and dist[s + c][c] == -1:
        dist[s + c][c] = dist[s][c] + 1
        q.append((s + c, c))
    if s - 1 >= 0 and dist[s - 1][c] == -1:
        dist[s - 1][c] = dist[s][c] + 1
        q.append((s - 1, c))

ans = -1
for i in range(n+1):
    if dist[n][i] != -1:
        if ans == -1 or ans > dist[n][i]:
            ans = dist[n][i]
print(ans)


