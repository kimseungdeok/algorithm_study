from collections import deque

def solution(maps):
    def is_valid_coord(y, x):
        return 0 <= y < n and 0 <= x < m
    def dij():
        while len(dq) > 0:
            y, x, d = dq.popleft()

            if y == n - 1 and x == m - 1: 
                return d

            for k in range(4):
                ny = y + dy[k]
                nx = x + dx[k]
                nd = d + 1
                if is_valid_coord(ny, nx) and maps[ny][nx] == 1 and not chk[ny][nx]:

                    chk[ny][nx] = True
                    dq.append((ny, nx, nd))
    n = len(maps)
    m = len(maps[0])
    dy = (0, 1, 0, -1)
    dx = (1, 0, -1, 0)
    
    chk = [[False] * m for _ in range(n)]
    dq = deque()
    dq.append((0,0,1))
    chk[0][0] = True
    answer = dij()
    if answer == None:
        answer = -1
    return answer

