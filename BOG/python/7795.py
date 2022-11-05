from sys import stdin

# 2
# 5 3
# 8 1 7 3 1
# 3 6 1
# 3 4
# 2 13 7
# 103 11 290 215

stdin = open('example.txt', 'r')
input = stdin.readline

tc = int((input())) # 테스트 케이스 개수

for _ in range(tc):
    n, m = map(int, input().split()) # a 마리수 n, b 마리수 m
    nList = list(map(int, input().split()))
    mList = list(map(int, input().split()))
    nList.sort()
    mList.sort()

    count = 0
    pair = 0

    for i in range(n):
        while True:
            if count == m or nList[i] <= mList[count]:
                pair += count
                break
            else:
                count += 1

    print(pair)






