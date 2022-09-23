import sys
sys.stdin = open('example.txt', 'r')

input = list(map(int, input().split(' ')))

x = input[0]
y = input[1]
w = input[2]
h = input[3]

min = min(x-0, y-0, w-x, h-y)



print(min)