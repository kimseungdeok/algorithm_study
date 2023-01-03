from sys import stdin

stdin = open('example.txt', 'r')
input = stdin.readline

k, n = map(int, input().split())
lan = []
for i in range(k):
    lan.append(int(input()))

start = 1
end = max(lan)

while start <= end:
    mid = (start + end) // 2
    count = 0
    for i in lan:
        count += i // mid

    if count >= n:
        start = mid + 1
    else:
        end = mid - 1

print(end)

