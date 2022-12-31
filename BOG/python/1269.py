# Title: 대칭 차집합
# Link: https://www.acmicpc.net/problem/1269

from sys import stdin
import itertools

stdin = open('example.txt', 'r')
input = stdin.readline

a, b = map(int, input().split())
A = set(map(int, input().split()))
B = set(map(int, input().split()))



# for i in itertools.product(A, B):
#     if i[0] == i[1]:
#         A.discard(i[0])
#         B.discard(i[1])
#         continue
# print(len(A) + len(B))

print(len(A - B) + len(B - A))