import sys

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n = int(input())
    people = []
    for _ in range(n):
        vol = list(map(int, input().split()))
        people.append(vol)

    people.sort()
    cnt = 1
    worst = people[0][1]

    for i in range(1, n):
        if people[i][1] < worst:
            worst = people[i][1]
            cnt = cnt + 1

    print(cnt)
