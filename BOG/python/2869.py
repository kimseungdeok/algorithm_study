import sys

sys.stdin = open('example.txt', 'r')

speed, sleep, target = map(int,sys.stdin.readline().split())

day = (target - sleep) / (speed - sleep)

if day == int(day):
    print(int(day))
else:
    print(int(day)+1)
