import itertools
import sys

sys.stdin = open('example.txt', 'r')

testCase = int(sys.stdin.readline().strip())

testCases = []

for _ in range(testCase):
    testCases.append(int(sys.stdin.readline().strip()))

numList = [1,2,3]
perList = [] # 모든 순열이 들어가는 배열

for test in range(len(testCases)):
    answer = []
    for i in range(1, testCases[test]+1):
        for i in itertools.product(numList, repeat=i):
            if sum(i)==testCases[test]:
                # print(i, end=' ')
                answer.append(i)
    print(len(answer))



