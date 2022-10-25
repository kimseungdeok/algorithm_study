from sys import stdin

stdin = open('example.txt', 'r')
input = stdin.readline

N = int(input())

paper = [list(map(int, input().split())) for _ in range(N)]

result_minus = 0
result_zero = 0
result_plus = 0

def dfs(x,y,n):
    global result_minus, result_zero, result_plus

    num_check = paper[x][y]
    for i in range(x, x+n):
        for j in range(y, y+n):
            if(paper[i][j] != num_check):
                for k in range(3):
                    for l in range(3):
                        dfs(x+k*n//3, y+l*n//3, n//3)
                return
    if num_check == -1:
        result_minus += 1
    elif num_check == 0:
        result_zero += 1
    else:
        result_plus +=1

dfs(0,0,N)
print(result_minus, result_zero, result_plus, sep='\n' )
    
