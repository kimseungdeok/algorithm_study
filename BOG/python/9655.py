from itertools import cycle
from sys import stdin

stdin = open('example.txt', 'r')
input = stdin.readline

stone = int(input())

# dp = [0] * (stone+1)

# # 1이 sk, 2가 cy

# for i in range(3, stone+1):
#     dp[1] = 1
#     dp[2] = 2


if stone % 2 == 0:
    print('CY')
else:
    print('SK')