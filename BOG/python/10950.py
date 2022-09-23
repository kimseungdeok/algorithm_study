import sys

sys.stdin = open('example.txt', 'r')

input = sys.stdin.read().splitlines()
num = int(input[0])


for i in range(1,num+1):
    print(int(input[i][0])+ int(input[i][2]))
