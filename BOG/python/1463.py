from sys import stdin

input = stdin.readline

num = int(input())

dp = [0] * (num+1)

for i in range(2, num+1):
    dp[0] = 0
    dp[1] = 0
    dp[i] = dp[i-1] +1


    if i % 3 == 0 and dp[i] > dp[i//3]+1:
        dp[i] = dp[i//3] +1
    if i % 2 == 0 and dp[i] > dp[i//2]+1:
        dp[i] = dp[i//2] +1

print(dp[num])


