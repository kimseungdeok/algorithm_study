# 3 10
# 10
# 20
# 15

from sys import stdin

stdin = open('example.txt', 'r')

N, K = map(int, stdin.readline().split())

levels = []
for _ in range(N):
    levels.append(int(stdin.readline().strip())) # [10, 20, 15]
    
start = min(levels)
end = start + K
# res = 0 
# 만약 총 올린 레벨 sum이 k보다 적거나 같을 경우 start를 mid+1설정, 
# res라는 변수에 max(mid, res) 해주어서 mid값중 가장 큰 값을 구해줌 

while start <= end:
    mid = (start+end) // 2 # 팀 목표 레벨

    sum = 0 # 목표레벨과 각 맴버 레벨의 차이들의 합
    for level in levels: 
        if level <= mid:
            sum += mid - level
    if sum <= K:
        start = mid + 1
        # res = max(mid, res)
    else:
        end = mid - 1

print(end)