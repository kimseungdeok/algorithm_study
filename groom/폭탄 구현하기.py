# input 받기
n, k = map(int, input().split())
g = [list(input().split()) for _ in range(n)]


# 함수 정의
def process_cell(x, y, at_array, s_array, g):
    if g[x][y] == "@":
        at_array.append((x, y))
        g[x][y] = 0
    elif g[x][y] == "#":
        s_array.append((x, y))
        g[x][y] = 0
    else:
        g[x][y] = int(g[x][y]) if str(g[x][y]).isnumeric() else 0
    g[x][y] += 1


# 처리
at_array = []
s_array = []

for _ in range(k):
    x, y = map(int, input().split())
    x -= 1
    y -= 1

    process_cell(x, y, at_array, s_array, g)

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    for dx, dy in directions:
        new_x = x + dx
        new_y = y + dy
        if 0 <= new_x < n and 0 <= new_y < n:
            process_cell(new_x, new_y, at_array, s_array, g)

# at_array, s_array 순회 및 처리
for x, y in at_array:
    g[x][y] *= 2

for x, y in s_array:
    g[x][y] = 0

# 최대값 계산 및 출력
global_max = 0

for arr in g:
    row_max = max([x for x in arr if isinstance(x, int)], default=0)
    global_max = max(global_max, row_max)

print(global_max)
