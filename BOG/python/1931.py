from sys import stdin

stdin = open('example.txt', 'r')
input = stdin.readline

num = int(input())
times = []

for _ in range(num):
    times.append(list(map(int, input().split())))

times = sorted(times, key=lambda a: a[0])
times = sorted(times, key=lambda a: a[1])

last = 0
count = 0

for i, j in times:
    if i >= last:
        count += 1
        last = j

print(count)
