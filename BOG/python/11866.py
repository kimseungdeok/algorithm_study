from collections import deque
from sys import stdin

# stdin = open('example.txt', 'r')

n, k = map(int, stdin.readline().split())

que = deque(list(range(1, n+1)))

answer = []

while que:
    que.rotate(-(k-1))
    answer.append(que[0])
    que.popleft()
    

output = '<'

for el in answer[:-1]:
    output += str(el) + ', '

output += str(answer[-1])

print(output + '>')
    