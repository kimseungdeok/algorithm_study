import heapq

def check_range(y, x):
    return (0 <= y < N) and (0 <= x < N)

def dijkstra(y, x):
    hq = []
    dy = [1, -1, 0, 0]
    dx = [0, 0, 1, -1]
    visited = [[0 for _ in range(N)] for _ in range(N)]

    heapq.heappush(hq, (0, y, x))
    visited[y][x] = 1
    while hq:
        weight, cy, cx = heapq.heappop(hq)
        if cy == N-1 and cx == N-1:
            return weight

        for d in range(4):
            ny = cy + dy[d]
            nx = cx + dx[d]
            if check_range(ny, nx) and visited[ny][nx] == 0:
                visited[ny][nx] = 1
                if board[ny][nx]:
                    heapq.heappush(hq, (weight, ny, nx))
                else:
                    heapq.heappush(hq, (weight + 1, ny, nx))

N = int(input()) # 한줄에 들어가는 방의 수
board = []
for _ in range(N):
    board.append(list(map(int, input().strip())))
answer = dijkstra(0, 0)
print(answer)