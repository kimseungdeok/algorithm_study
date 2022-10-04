from sys import stdin
import heapq

stdin = open('example.txt','r')

testCase = int(stdin.readline().strip())

cards = []
result = 0

for _ in range(testCase):
    # cards.append(int(stdin.readline())) # [10, 20, 40]
    heapq.heappush(cards, int(stdin.readline()))

if len(cards)==1:
    print(0)
else:
    while len(cards) > 1:
        plus = heapq.heappop(cards) + heapq.heappop(cards)
        result += plus
        heapq.heappush(cards, plus)
    print(result)
