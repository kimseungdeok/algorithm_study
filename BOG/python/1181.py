import sys
sys.stdin = open('example.txt', 'r')

num = int(sys.stdin.readline())

li = []

for i in range(num):
    li.append(input())

li = list(set(li))

li.sort()
li.sort(key = len)

for word in li:
    print(word)
