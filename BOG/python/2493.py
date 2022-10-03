from sys import stdin

stdin = open('example.txt', 'r')

testCase = int(stdin.readline().strip())

topList = list(map(int, stdin.readline().split()))

stack = []
answer = []

for i in range(testCase):
    while stack:
        if stack[-1][1] > topList[i]:
            answer.append(stack[-1][0]+1)
            break
        else:
            stack.pop()
    if not stack:
        answer.append(0)
    stack.append([i, topList[i]])

print(' '.join(map(str, answer)))

