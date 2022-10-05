from sys import stdin

stdin = open('example.txt', 'r')
N, B = map(int, stdin.readline().strip().split())
matrix = [list(map(int, stdin.readline().strip().split())) for _ in range(N)]

# [[1, 2], [3, 4]]

def matrix_mul(a,b):
    temp = [[0] * N for _ in range(N)]
    for i in range(N):
        for j in range(N):
            for k in range(N):
                temp[i][j] += a[i][k] * b[k][j]
        
    for i in range(N):
        for j in range(N):
            temp[i][j] %= 1000

    return temp

def DoC(B, matrix):
    if B == 1:
        return matrix
    elif B == 2:
        return matrix_mul(matrix, matrix)
    else:
        tmp=DoC(B//2, matrix)
        # 홀수이면
        if B % 2:
            return matrix_mul(matrix_mul(tmp, tmp), matrix)
        else:
            return matrix_mul(tmp, tmp)

res = DoC(B, matrix)
for row in res:
    for cell in row:
        print(cell%1000, end=" ")
    print()
