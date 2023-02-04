from sys import stdin

stdin = open('example.txt','r')

v, e = map(int, stdin.readline().split())

tree = [] # [[1, 2, 1], [2, 3, 2], [1, 3, 3]]
cycleTable = [] # [[1, 1], [2, 2], [3, 3]]

weights = []


for i in range(e):
    tree.append(list(map(int, stdin.readline().split())))
    cycleTable.append([i+1])

# print(tree, cycleTable)

tree.sort(key=lambda x : x[2]) # 가중치 기준으로 정렬

weights.append(tree[0][2]) # 처음 값을 넣어줌
cycleTable[1-1][1] = 1 # 사용된 점을 1로 표시
cycleTable[2-1][1] = 1 # 사용된 점을 1로 표시

for j in range(1, e): # 각각의 점이 사용이 되었는지 확인하기 위한 반복문
    print(cycleTable[tree[j][0]-1][1], cycleTable[tree[j][1]-1][1])
    if cycleTable[tree[j][0]-1][1] == 1 and cycleTable[tree[j][1]-1][1]==1:
        break
    # else : 
        # weights.append(tree[j][2])

# print(weights)

