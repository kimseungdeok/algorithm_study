import sys
input = sys.stdin.readline
MAX_CAL = 2 ** 31
N = int(input())
dp = [[MAX_CAL] * (N+1)  for _ in range(N+1)]
p = [[0,0]]
for _ in range(N):
    r,c = map(int, input().split())
    p.append([r,c])
p.append(p[-1][0:])
p[-1].reverse()
for diff in range(0, N+1): # 0 1 2 3
    for i in range(1, N+1): # 1 2 3
        # 대각선방향으로 1,2 2,3 3,4 ...  => 1,3 2,4 3,5 ... => 탐색하며 채워넣어야 함
        if i + diff > N:
            continue
        j = i + diff
        if i == j:
            dp[i][j] = 0
        elif i <= j:
            for k in range(i, j):
                dp[i][j] = min(
                    dp[i][j],
                    dp[i][k]
                    + dp[k+1][j]
                    + p[i][0] * p[k+1][0] * p[j+1][0]
                )
print(dp[1][len(p)-2])