from sys import stdin
from collections import deque

stdin = open('example.txt', 'r')

dy = (0, 1, 0, -1)
dx = (1, 0, -1, 0)

n, m = map(int, stdin.readline().strip().split())
board = [stdin.readline().strip() for _ in range(n)]
chk = [[False] * m for _ in range(n)]
dq = deque()
dq.append((0,0,1))
chk[0][0] = True

def is_valid_coord(y, x):
    return 0 <= y < n and 0 <= x < m

while len(dq) > 0:
    y, x, d = dq.popleft()

    if y == n - 1 and x == m - 1:
        print(d)
        break
    
    for k in range(4):
        ny = y + dy[k]
        nx = x + dx[k]
        nd = d + 1
        if is_valid_coord(ny, nx) and board[ny][nx] == '1' and not chk[ny][nx]:
            chk[ny][nx] = True
            dq.append((ny, nx, nd))