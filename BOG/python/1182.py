# 시험 후 다시 풀고 제출
import itertools
import sys

sys.stdin = open('example.txt', 'r')

N, S = map(int, sys.stdin.readline().strip().split())

numList = list(map(int, sys.stdin.readline().strip().split()))

count =  0
for i in range(1, N+1):
    permu_list = list(itertools.combinations(numList, i))
    for permu in permu_list:
        if sum(permu) == S:
            count += 1

print(count)