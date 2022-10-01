# 4 7
# 20 15 10 17

from sys import stdin
from bisect import bisect_left
from turtle import left # 이진 탐색을 쉽게 구현하게끔 해주는 함수

stdin = open('example.txt', 'r')

# target과 가장 가까운 숫자를 리턴
def findClosestNum(array, target):
    # array : 사대의 위치 리스트를 넣을것
    # target : 동물의 x좌표를 넣음
    # bisect 함수를 사용 
    # bisect_left -> 타깃과 같은 값이 있으면 그 인덱스를 반환하고 없다면 리스트 오름차순에 들어갈 인덱스를 반환한다.
    index = bisect_left(array, target) 

    # 배열의 처음값과 같거나 그보다 작으면
    if index == 0:
        return array[index]

    # 배열의 마지막값과 같거나 더 크면
    if index == len(array):
        return array[-1]
    
    # 처음값과 마지막값 사이라면 아래와 같이 작업
    # left 변수에 이전 인덱스를 넣음
    # right 변수에 현재 인덱스를 넣음
    # 이렇게 작업하는 이유는 중간의 인덱스로 들어가더라도 어느 쪽이 더 가까운지 파악하기 위함
    left = array[index-1]
    right = array[index]

    if target-left < right-target:
        return left
    return right

m, n, l = map(int, stdin.readline().split()) # m : 사대의 수, n : 동물의 수,  l : 사정 거리
lLocations = sorted(list(map(int, stdin.readline().split()))) # lLocations : 사대의 위치들 리스트
animals = [tuple(map(int, stdin.readline().split())) for _ in range(n)] 
# animals : 동물의 위치 x,y 좌표 튜플
# [(7, 2), (3, 3), (4, 5), (5, 1), (2, 2), (1, 4), (8, 4), (9, 4)]

answer = 0
# 각 동물이 사냥될 수 있는 사대의 위치를 모아본다.
for x, y in animals:
    # 현재 동물의 위치에서 가장 가까운 사대를 찾는다.
    closestLLocation = findClosestNum(lLocations, x)

    # 사대까지의 거리가 사정거리 안에 있는지 확인해본다.
    if x - (l - y) <= closestLLocation <= x + (l - y):
        answer += 1

print(answer)