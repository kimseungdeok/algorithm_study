import sys

input = sys.stdin.readline


def solve():
    n = int(input())
    xy_coords = [tuple(map(int, input().split())) for _ in range(2)]
    grid = [list(input().split()) for _ in range(n)]

    scores = []

    def calculate_score(x, y, count, direction):
        if visited[x][y]:
            return 0
        visited[x][y] = True
        if count == 0:
            count, direction = int(grid[x][y][:-1]), grid[x][y][-1]
        if direction == "U":
            return 1 + calculate_score(
                x - 1 if x - 1 >= 0 else n - 1, y, count - 1, direction
            )
        elif direction == "D":
            return 1 + calculate_score((x + 1) % n, y, count - 1, direction)
        elif direction == "L":
            return 1 + calculate_score(
                x, y - 1 if y - 1 >= 0 else n - 1, count - 1, direction
            )
        elif direction == "R":
            return 1 + calculate_score(x, (y + 1) % n, count - 1, direction)

    for x, y in xy_coords:
        x -= 1
        y -= 1
        visited = [[False] * n for _ in range(n)]
        scores.append(calculate_score(x, y, 0, ""))

    if scores[0] < scores[1]:
        print("player", scores[1])
    else:
        print("goorm", scores[0])


solve()
