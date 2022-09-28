from itertools import combinations, permutations
import sys

sys.stdin = open('example.txt', 'r')

N = int(sys.stdin.readline().strip())

numList = list(map(int, sys.stdin.readline().split()))

def sumDiff(numList):
    sum = 0
    for i, j in zip(numList, numList[1:]):
        absNum = abs(i - j)
        sum += absNum
    return sum

mixArrList = list(permutations(numList, N))

sumSet = set([])

for i in mixArrList:
    sumSet.add(sumDiff(list(i)))

print(max(sumSet))