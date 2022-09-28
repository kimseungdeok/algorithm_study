import itertools
import sys

sys.stdin = open('example.txt', 'r')

input = sys.stdin.read().split()

heights = list(map(int, input))

combi = list(itertools.combinations(heights, 7))

answerTuple = []

for i in combi:
    # print(sum(i))
    if sum(i) == 100:
        answerTuple.append(i)

answer = list(answerTuple[0])
answer.sort()

for i in answer:
    print(i)