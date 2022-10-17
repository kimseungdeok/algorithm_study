from sys import stdin

stdin = open('example.txt', 'r')
input = stdin.readline

n, k = map(int, input().split())

coins = []
for _ in range(n):
    coin = int(input())
    coins.append(coin)

coins.reverse()

count = 0

for coin in coins:
    if k < coin:
        continue
    else:
        count += k // coin
        k = k % coin

print(count)