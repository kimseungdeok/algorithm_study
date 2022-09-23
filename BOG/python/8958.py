import sys

sys.stdin = open('example.txt', 'r')

input = sys.stdin.read().split('\n')

num = int(input[0])
score = 1
sum = 0
for i in range(1,num+1):
    
    sum = 0
    score = 1
    for j in input[i]:
        if(j == 'O'):
            sum += score
            score += 1
        elif(j == 'X'):
            score = 1
    print(sum)
