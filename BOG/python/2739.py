import sys

sys.stdin = open('example.txt', 'r')

num = int(input())

for x in range(9):
    print(num, '*', x+1, '=', num*(x+1))