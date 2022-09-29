import sys

# sys.stdin = open('example.txt', 'r')

x, y = map(int,sys.stdin.readline().strip().split())

day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

month = [31,28,31,30,31,30,31,31,30,31,30,31]


def calDate(monthNum, dateNum):
    date = 0
    for i in range(1, monthNum):
        date += month[i-1]
    date += dateNum
    return day[date%7]

print(calDate(x ,y))