from sys import stdin
import heapq

stdin = open('example.txt', 'r')

inputNum = int(stdin.readline().strip())

answer = []
for _ in range(inputNum):
    el = int(stdin.readline().strip())
    if el == 0:
        if not answer:
            print(0)
        else:
            print(-1 * answer[0])
            heapq.heappop(answer)
    else :
        heapq.heappush(answer, (-1*el))


# 힙 연습의 현장
# heapq.heappush(answer, -3)
# heapq.heappush(answer, -2)
# heapq.heappush(answer, -4)
# heapq.heappush(answer, -1)

# print(len(answer))

# for i in range(len(answer)):
#     print(-heapq.heappop(answer))