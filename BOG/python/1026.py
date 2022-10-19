from sys import stdin

stdin = open('example.txt', 'r')
input = stdin.readline

num = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))

a.sort()
a.reverse()
b.sort()

multiArr = []
for i, j in zip(a, b):
    # print(i, j)
    multi = i * j
    multiArr.append(multi)

print(sum(multiArr))
