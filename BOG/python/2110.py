from sys import stdin

stdin = open('example.txt', 'r')

N, C = map(int, stdin.readline().strip().split())
# print(N, C)
modems = []
for _ in range(N):
    modems.append(int(stdin.readline().strip()))

modems.sort()

def installModems(array, start, end):
    while start <= end:
        mid = (start+end)//2
        current = array[0]
        count = 1 # 공유기 설치 대수를 확인하기 위해서 만든 변수

        for i in range(1, len(array)):
            if array[i] >= current + mid:
                count += 1
                current = array[i]
        if count >= C  :
            global answer
            start = mid + 1
            answer = mid
        else:
            end = mid - 1


