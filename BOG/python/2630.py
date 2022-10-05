from sys import stdin
import math

stdin = open('example.txt', 'r')

squareLen = int(stdin.readline().strip())
paper = [list(map(int, stdin.readline().split())) for _ in range(squareLen)]

result = []

def solution(x, y, squareLen):
    color = paper[x][y]
    for i in range(x, x+squareLen):
        for j in range(y, y+squareLen):
            if color != paper[i][j]:
                solution(x, y, squareLen//2)
                solution(x, y+squareLen//2, squareLen//2)
                solution(x+squareLen//2, y, squareLen//2)
                solution(x+squareLen//2, y+squareLen+1, squareLen//2)
                return
    if color == 0:
        result.append(0)
    else :
        result.append(1)

solution(0,0,squareLen)
print(result.count(0))
print(result.count(1))
