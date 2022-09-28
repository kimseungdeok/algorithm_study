from itertools import combinations
import sys

sys.stdin = open('example.txt', 'r')

input = sys.stdin.readline().strip()

N, M = list(map(int, input.split()))

cards = list(map(int, sys.stdin.readline().split()))

combi = list(combinations(cards, 3))

answer = []

for i in combi:
    if sum(i) <= M:
        answer.append(sum(i))

print(max(answer))