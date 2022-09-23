import sys

sys.stdin = open('example.txt', 'r')

input = int(input())

for i in range(1,input+1):
    print('*' * i)


