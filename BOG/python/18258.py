from collections import deque
from sys import stdin

stdin = open('example.txt', 'r')

testCase = int(stdin.readline().strip())
que = deque()

for _ in range(testCase):
    commands = stdin.readline().strip().split()
    # print(commands)
    if commands[0] == 'push':
        # print(int(commands[1]))
        que.appendleft(int(commands[1]))
    elif commands[0] == 'pop':
        if len(que) == 0:
            print(-1)
        else:
            print(que[-1])
            que.pop()
    elif commands[0] == 'size':
        print(len(que))
    elif commands[0] == 'empty':
        if len(que) == 0:
            print(1)
        else:
            print(0)
    elif commands[0] == 'front':
        if not que:
            print(-1)
        else:
            print(que[-1])
    elif commands[0] == 'back':
        if len(que) == 0:
            print(-1)
        else:
            print(que[0])
        