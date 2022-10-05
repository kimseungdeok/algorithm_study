from sys import stdin

stdin = open('example.txt', 'r')

N, B = map(int, stdin.readline().strip().split())
A = [list(map(int, stdin.readline().strip().split())) for _ in range(N)]

def mul(U, V):
    n = len(U)
    Z = [[0]*n for _ in range(n)]

    for row in range(n):
        for col in range(n):
            e = 0
            for i in range(n):
                e += U[row][i] * V[i][col]
            Z[row][col] = e % 1000
    return Z

def square(A, B):
    if B == 1:
        for x in range(len(A)):
            for y in range(len(A)):
                A[x][y] %= 1000
            return A

        tmp = square(A, B//2)
        if B % 2:
            return mul(mul(tmp, tmp), A)
        else:
            return mul(tmp, tmp)

result = square(A, B)
for r in result:
    print(*r)
