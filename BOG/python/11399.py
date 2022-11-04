from sys import stdin

stdin = open('example.txt', 'r')
input = stdin.readline

n = int(input())
atmTime = list(map(int, input().split()))

atmTime.sort()

if len(atmTime)<3:
    print(sum(atmTime))
else :
    temp = 0
    answer = []
    answer.append(atmTime[0]+atmTime[1])

    for i in atmTime[2:]:
        temp = answer[-1] + i
        answer.append(temp)

    # print(atmTime)
    print(sum(answer) + atmTime[0])