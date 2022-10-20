import sys


n = int(sys.stdin.readline())


dp = [True] * 1001

dp[1] = True  # 상근이 이기는 경우
dp[2] = False # 창경이 이기는 경우
dp[3] = True
dp[4] = True
for i in range(5,n+1):
    if False in [dp[i-1],dp[i-3],dp[i-4]]: # 이 세가지 경우중 하나라도 False면은 
        dp[i] = True
    else:
        dp[i] = False

if dp[n] == True:
    print("SK")
else:
    print("CY")