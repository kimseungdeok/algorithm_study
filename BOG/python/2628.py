import sys

sys.stdin = open('example.txt', 'r')

# 예제 입력
# 10 8
# 3
# 0 3
# 1 4
# 0 2

col, row = map(int, input().split())
rows = [0, row] # 행
cols = [0, col] # 열

for _ in range(int(input())):
    now, num = map(int, input().split())
    if now:
        cols.append(num)
    else:
        rows.append(num)

rows.sort()
cols.sort()
# print(rows, cols)
answer = 0

for i in range(len(rows) - 1):
    for j in range(len(cols) - 1):
        answer = max(answer, (cols[j + 1] - cols[j]) * (rows[i + 1] - rows[i]))

print(answer)

