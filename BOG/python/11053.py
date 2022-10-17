from sys import stdin

stdin = open('example.txt', 'r')
input = stdin.readline


len = int(input())
numbers = list(map(int, input().split()))


dp = [1]* len

for i in range(len):
    for j in range(i):
        if numbers[i] > numbers[j]:
            dp[i] = max(dp[i],dp[j]+1)

print(max(dp))
