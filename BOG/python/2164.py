from collections import deque
from sys import stdin

# stdin = open('example.txt', 'r')

inputNum = int(stdin.readline().strip())

cards = deque(list(range(1, inputNum+1)))

while len(cards) > 1:
    cards.popleft()
    cards.rotate(-1)

print(cards[0])
    