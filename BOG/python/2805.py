# 4 7
# 20 15 10 17

from sys import stdin

N, M = map(int, stdin.readline().split())
tree = list(map(int, stdin.readline().split()))
start, end = 0, max(tree)

# print(N, M, tree)

while start <= end:
    mid = (start+end) // 2

    sum = 0 # 벌목된 나무의 총합
    for i in tree: # 나무 배열 요소를 순회
        if i >= mid:
            sum += i - mid
    if sum >= M:
        start = mid + 1
    else:
        end = mid - 1

print(mid)