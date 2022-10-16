from sys import stdin

input = stdin.readline

testCase = int(input()) # 테스트 케이스 개수
for _ in range(testCase):
    n = int(input()) # 동전 종류 수
    coins = list(map(int, input().split())) # 동전 금액 리스트
    m = int(input()) # 목표 금액

    # memoization을 위한 리스트 선언
    d = [0] * (m+1)
    d[0] = 1

    for coin in coins:
        for i in range(m+1):
            if i >= coin:
                d[i] += d[i - coin]
    print(d[m])
