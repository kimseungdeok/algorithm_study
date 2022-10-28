from sys import stdin

stdin = open('example.txt', 'r')
input = stdin.readline

n = int(input())

quad = [list(map(int, input().strip())) for _ in range(n)]

def quadTree(x,y,n):
    num_check = quad[x][y]

    for i in range(x, x+n):
        for j in range(y, y+n):
            if num_check != quad[i][j]:
                num_check=-1
                break

    if num_check == -1:
        print("(", end='')
        n = n // 2
        quadTree(x, y, n) # 오른쪽 위
        quadTree(x, y+n, n)
        quadTree(x+n, y, n)
        quadTree(x+n, y+n, n)
        print(")", end='')

    elif num_check == 1:
        print(1, end='')
    else:
        print(0, end='')

quadTree(0,0,n)

