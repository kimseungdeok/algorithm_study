from sys import stdin
import heapq
from unittest import result

input = stdin.readline

n, k = map(int, input().split())

gem_list = [list(map(int, input().split())) for _ in range(n)]
bag_list = [int(input()) for _ in range(k)]
gem_list.sort()
bag_list.sort()

result = 0
temp = []

# bag_list 가방이 담을 수 있는 무게 = i
for i in bag_list:
    # gem_list가 존재하고 가방이 담을 수 있는 무게가 보석의 무게와 같거나 클때
    while gem_list and i >= gem_list[0][0]:
        # temp에 보석 가격 입력
        # - 를 붙여서 max heap 구현
        heapq.heappush(temp, -gem_list[0][1])
        heapq.heappop(gem_list)
    # temp의 요소가 있으면
    if temp:
        result += heapq.heappop(temp)

print(-result)