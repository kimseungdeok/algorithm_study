import sys

count = int(sys.stdin.readline())



for i in range(count):
    A, B = map(int, sys.stdin.readline().split(" "))
    print('Case #',i+1,':',' ', A+B, sep='')
