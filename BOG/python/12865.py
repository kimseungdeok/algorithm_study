from sys import stdin

input = stdin.readline

n, k = map(int, input().split())
stuff = [[0, 0]]
bag = [[0 for _ in range(k+1)] for _ in range(n+1)]

for _ in range(n):
    stuff.append(list(map(int, input().split())))

for i in range(1, n+1):
    for j in range(1, k+1):
        w = stuff[i][0] # 무게
        v = stuff[i][1] # 가치

        if j < w:
            bag[i][j] = bag[i-1][j] # w보다 작으면 위의 값을 그대로 가져온다
        else:
            bag[i][j] = max(v + bag[i-1][j-w], bag[i-1][j])

print(bag[n][k])

