from sys import stdin

input = stdin.readline

n = int(input().strip())
houses = list(map(int, input().split()))
houses.sort()

print(houses[(n-1)//2])