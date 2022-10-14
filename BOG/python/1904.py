from sys import stdin

input = stdin.readline

N = int(input())

dp = [0] * 10000001

def tile(N):
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2

    for i in range(3, N+1):
        dp[i] = (dp[i-2] + dp[i-1])%15746

    return dp[N]

print(tile(N))

    