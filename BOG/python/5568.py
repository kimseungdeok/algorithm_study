import sys
from itertools import permutations as p

sys.stdin = open('example.txt', 'r')

cards = []
n, k = int(sys.stdin.readline()), int(sys.stdin.readline())
for i in range(n):
    cards.append(int(sys.stdin.readline()))

res = set()
for i in list(p(cards, k)):
    res.add(''.join(list(map(str, i))))

print(len(res))