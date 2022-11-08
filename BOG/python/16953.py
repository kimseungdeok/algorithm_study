from sys import stdin

stdin = open('example.txt', 'r')
input = stdin.readline


a, b = map(int, input().split())
count = 0

min_count = 1e9

def dfs(a, target, count):
    global min_count

    if a > target:
        return

    elif a == target:
        min_count = min(min_count, count)
        return
    
    else:
        dfs((a*2), target, count +1)
        dfs((a*10+1), target, count+1)

dfs(a,b,0)
if min_count != 1e9:
    print(min_count+1)
else:
    print(-1)